export const getLocationData = datum => {
  let out = {};
  for (let item of datum) {
    out[item['Location']] = (out[item['Location']] ?? 0) + 1;
  }
  return out;
};
