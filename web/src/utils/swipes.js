import { getDateRange } from './data';

// not very accurate calculations, gets the job done for now
// need to talk to someone...

const checkable = (swipeList, pointDate, rangeType) => {
  const { start, end } = getDateRange(pointDate, rangeType);
  return date => {
    if (date > start && date <= end) {
      swipeList.push(date);
    }
  };
};

export const getSwipeData = (dates, pointDate) => {
  // getting the number of swipes in that date range
  let weekSwipes = [];
  let semesterSwipes = [];

  // to find all swipes in another week, change checkable's second param to be in that range somehwere
  let checks = [
    checkable(weekSwipes, pointDate, 'week'),
    checkable(semesterSwipes, pointDate, 'semester'),
  ];

  for (let i = 1; i < dates.length; i++) {
    for (let check of checks) {
      check(dates[i]);
    }
  }

  let { start: semStart, end: semEnd } = getDateRange(pointDate, 'semester');

  // finds the swipes per day the multiples by 7 for week and rounds
  return {
    thisWeek: weekSwipes.length,
    total: dates.length,
    avgWeek:
      Math.round(
        ((semesterSwipes.length /
          ((semEnd - semStart) / (1000 * 60 * 60 * 24))) *
          7 +
          Number.EPSILON) *
          100,
      ) / 100,
  };
};
