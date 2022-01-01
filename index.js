const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const login_url = 'https://services.housing.berkeley.edu/c1c/dyn/login.asp';
const data_url =
  'https://services.housing.berkeley.edu/c1c/dyn/bals.asp?pln=Full';
const PORT = 5001;

const app = express();
app.use(cors());
app.use(express.json());

const loadPage = async creds => {
  const { calid, password } = creds;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(login_url, { waitUntil: 'load', timeout: 0 });

  // login
  await page.waitForSelector('#username');
  await page.type('#username', calid);
  await page.waitForSelector('#password');
  await page.type('#password', password);
  await page.waitForSelector('#submit');
  await page.click('#submit');

  // duo push
  await page.waitForNetworkIdle();
  const frames = page.frames();
  const frame = frames.find(f => f.url().includes('duosecurity.com'));
  await frame.click(
    '#auth_methods > fieldset:nth-child(1) > div.row-label.push-label > button',
  );

  // get user's name
  await page.waitForNetworkIdle();
  app.locals.username = await page.$eval(
    'body > div > div.container.clearfix > div > div > div > div.col3 > div > table.bodytext > tbody > tr:nth-child(2) > td > b',
    el => el.innerText,
  );

  // go to balances
  await page.goto(data_url, { waitUntil: 'load', timeout: 0 });
  // await page.screenshot({ path: 'balances.png' });

  return page;
};

const scrape = async page => {
  return await page.$$eval('table tr', rows => {
    let data = {};
    let currentPlan;
    let currentHeaders;

    rows.forEach(row => {
      const headers = row.querySelectorAll('th');
      const columns = row.querySelectorAll('td');

      if (headers.length == 1) {
        // new plan
        currentPlan = row.querySelector('b').innerText;
        data[currentPlan] = [];
      } else if (headers.length > 1) {
        // new plan's headers
        currentHeaders = Array.from(headers, head => head.innerText).filter(
          str => str && !/^\s*$/.test(str),
        );
      } else {
        // regular row
        if (columns.length > 1) {
          cleanColumns = Array.from(columns, column => column.innerText).filter(
            str => str && !/^\s*$/.test(str),
          );
          entry = {};
          for (let i = 0; i < cleanColumns.length; i++) {
            entry[currentHeaders[i]] = cleanColumns[i];
          }
          data[currentPlan].push(entry);
        }
      }
    });

    return data;
  });
};

app.post('/api', async (req, res) => {
  let data;

  try {
    const page = await loadPage(req.body);
    data = await scrape(page);
  } catch (error) {
    let msg;

    if (error instanceof TypeError) {
      msg = 'Invalid credentials.';
    } else {
      msg = 'Something went wrong.';
    }

    return res.status(400).json({ error: msg });
  }
  return res.status(200).json({ username: app.locals.username, ...data });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
