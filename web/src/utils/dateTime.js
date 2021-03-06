const emptyDate = new Date(new Date().setHours(0, 0, 0, 0));
const isWeekend = date => !(date.getDay() % 6);

const findAvgTime = times => {
  let totalMins = 0;
  for (let time of times) {
    totalMins += time.getHours() * 60 + time.getMinutes();
  }
  let avg = totalMins / times.length;

  if (isNaN(avg)) {
    return emptyDate;
  }

  // dummy date for date object
  return new Date(2000, 11, 5, 0, avg);
};

// find the min, max, avg meal-times
// given array of Date objects
export const getTimeData = dates => {
  let min = dates[0];
  let max = dates[0];
  let breakfast = [];
  let lunch = [];
  let dinner = [];

  for (let i = 1; i < dates.length; i++) {
    let item = dates[i];
    let itemTime = item.toLocaleTimeString([], { hour12: false });

    // using local time might cause bug if run elsewhere idk
    min = itemTime < min.toLocaleTimeString([], { hour12: false }) ? item : min;
    max = itemTime > max.toLocaleTimeString([], { hour12: false }) ? item : max;

    // checks what meal the time is in
    if (itemTime <= '10:00:00') {
      breakfast.push(item);
    } else if (
      (itemTime >= '11:00:00' || (isWeekend(item) && itemTime >= '10:30:00')) &&
      itemTime <= '13:00:00'
    ) {
      lunch.push(item);
    } else if (itemTime >= '16:30:00') {
      dinner.push(item);
    }
  }

  return {
    early: min || emptyDate,
    late: max || emptyDate,
    avg: {
      breakfast: findAvgTime(breakfast),
      lunch: findAvgTime(lunch),
      dinner: findAvgTime(dinner),
    },
  };
};
