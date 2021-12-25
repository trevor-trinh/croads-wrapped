// not very accurate calculations, gets the job done for now
// need to talk to someone...

const getRange = (date, rangeType) => {
  let start;
  let end;

  if (rangeType === 'semester') {
    if (date.getMonth() <= 4) {
      // spring jan11 - may15
      start = new Date(date.getFullYear(), 0, 11);
      end = new Date(date.getFullYear(), 4, 15);
    } else if (date.getMonth() >= 7) {
      // fall aug18 - dec17
      start = new Date(date.getFullYear(), 7, 18);
      end = new Date(date.getFullYear(), 11, 17);
    } else {
      // can't handle this yet lmao
      start = new Date();
      end = new Date();
    }
  } else {
    // default to start and end date of week
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

const checkable = (swipeList, pointDate, rangeType) => {
  const { start, end } = getRange(pointDate, rangeType);
  return date => {
    if (date > start && date <= end) {
      swipeList.push(date);
    }
  };
};

export const getSwipeData = dates => {
  // getting the number of swipes in that date range
  let weekSwipes = [];
  let semesterSwipes = [];

  // to find all swipes in another week, change checkable's second param to be in that range somehwere
  let checks = [
    checkable(weekSwipes, new Date(), 'week'),
    checkable(semesterSwipes, new Date(), 'semester'),
  ];

  for (let i = 1; i < dates.length; i++) {
    for (let check of checks) {
      check(dates[i]);
    }
  }

  let { start: semStart, end: semEnd } = getRange(new Date(), 'semester');

  // finds the swipes per day the multiples by 7 for week and rounds
  return {
    thisWeek: weekSwipes.length,
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
