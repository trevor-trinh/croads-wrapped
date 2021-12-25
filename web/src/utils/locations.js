export const getLocationData = data => {
  let out = {};
  for (let item of data['On-Campus Blue Meal Plan Activity']) {
    out[item['Location']] = (out[item['Location']] ?? 0) + 1;
  }
  return out;
};
