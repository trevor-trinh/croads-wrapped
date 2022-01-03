import { getTimeData } from './dateTime';
import { getLocationData } from './locations';
import { getSwipeData } from './swipes';

export const parseData = (data, date) => {
  //   // ----- FINAL RETURN DATA ------
  //   const username = data['username'];

  // gets a semester's start and end given date
  const dateRange = getDateRange(date, 'semester');

  // gets all meal plan data, array of objects
  const rawMealData = Object.keys(data)
    .filter(key => key.includes('Meal Plan Activity'))
    .flatMap(item => data[item]);

  // making meal times into date objects
  const datedMealDatum = rawMealData.map(meal => ({
    ...meal,
    Posted: new Date(meal['Posted']),
  }));

  //  gets meal dates that fall in THIS semester
  const semMealDatum = datedMealDatum.filter(
    item => dateRange.start <= item.Posted && item.Posted <= dateRange.end,
  );

  // ----- FINAL RETURN DATA -----
  // {
  //    location: null
  // }
  const locationDatum = getLocationData(semMealDatum);

  // puts all meal dates in this semester into array
  const semDates = loadDates(semMealDatum);

  // ----- FINAL RETURN DATA -----
  // {
  //   early: null,
  //   late: null,
  //   avg: {
  //       breakfast: null,
  //       lunch: null,
  //       dinner: null,
  //   },
  // }
  const timeDatum = getTimeData(semDates);

  // ----- FINAL RETURN DATA -----
  // {
  //   thisWeek: null,
  //   avgWeek: null,
  // }
  const swipeDatum = getSwipeData(semDates, date);

  return { locationDatum, timeDatum, swipeDatum };
};

const loadDates = datum => {
  let commonDates = [];
  for (let item of datum) {
    commonDates.push(new Date(item['Posted']));
  }
  return commonDates;
};

const semRanges = {
  fa21: {
    start: new Date(2021, 7, 18),
    end: new Date(2021, 11, 17),
  },
  sp22: {
    start: new Date(2022, 0, 11),
    end: new Date(2022, 4, 15),
  },
};

export const getDateRange = (date, rangeType) => {
  let start = new Date();
  let end = new Date();

  if (rangeType === 'semester') {
    for (const [, { start: trueStart, end: trueEnd }] of Object.entries(
      semRanges,
    )) {
      if (trueStart <= date && date <= trueEnd) {
        start = new Date(trueStart);
        end = new Date(trueEnd);
      }
    }
  } else {
    // default to rangeType 'week'
    start = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay(),
    );
    end = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - date.getDay() + 6,
    );
  }

  return { start, end };
};

export const cardDateData = [
  {
    semester: 'Fall 2021',
    dateRange: getDateRange(semRanges.fa21.start, 'semester'),
    image:
      'https://images.unsplash.com/photo-1574125053225-146d962568ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  },
  {
    semester: 'Spring 2022',
    dateRange: getDateRange(semRanges.sp22.start, 'semester'),
    image:
      'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_SpotlightBerkeley_Hero_Stock_RF_149303390_1280x640.jpg',
  },
];
