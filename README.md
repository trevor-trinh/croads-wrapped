# Croads Wrapped

Croads Wrapped is a website created to show a student's Cal Dining data (and insights from that data) in a fun format. Inspired by a good friend's joke :sake:

One of my major difficulties in making this was figuring out how to fetch the student's Cal Dining data. I tried several things from using Google's OAuth, iframes, to the browser's fetch API. But because of my lack of understanding and issues like CORS, I couldn't get them to work. My current workaround is using the headless chrome API `puppeteer` to pass credentials, click the Duo Mobile 2FA push, login on behalf of the user, and scrape necessary data. While it works, it definitely has limitations like race conditions and being hella sketch.

**Does NOT store user credentials.**

## Built With

Made with a React frontend and Node backend.

- [React.js](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Router](https://reactrouter.com/)
- [Express.js](https://expressjs.com/)
- [Puppeteer](https://pptr.dev/)

## Bugs and Limitations

- [ ] Not directly through Google OAuth (is it even possible?)
- [ ] Error handling (like 404 pages)
- [ ] Persist login state (currently will logout on refresh)
- [ ] Hard-coded semester dates
- [ ] Showing data for upcoming semester (currently dummy data, could make this more elegant)
- [ ] Code quality (probably should use context and custom hooks)
- [ ] If calendar (in nav bar) is open on home screen, will close after selecting a semester or clicking back after viewing details (since changing date state)

## Potential Future Developments

- [ ] More mobile friendly
- [ ] Loading pages, transitions, and animations
- [ ] Graphs
- [ ] Verify and improve data calculations
- [ ] Improve average meal time data display (maybe a relative timeline)
- [ ] Calendar (in nav bar) hover to show date selector, changing date shows swipes used that week and flex dollar balance that day
- [ ] Use without login (user would copy-paste code into Cal console and copy-paste output back into Croads Wrapped to populate data, not sure about mobile...)
- [ ] Amount of swipes not used, show approx money given to school
- [ ] Pooling data from other users to show relative insights
- [ ] Dining hall streaks, consecutive meals

## Screenshots

## Contributing

If you would like to contribute, pull requests welcome! Any feedback is appreciated!
