export function filterToEnglishOnly(trends: string[]) {
  let englishRegex = /[A-Za-z0-9]+/g;
  let englishOnly = trends.filter(trend => {
    if (trend.match(englishRegex)) {
      return trend;
    }
  });
  return englishOnly;
}
export function splitByCapitalLetters(trend: string) {
  // what about 2020 or other numbers? KONY2020 --> "Kony", "2020"
  return trend.match(/[A-Z][a-z]+/g);
}

export function splitBySpace(trend: string) {
  return trend.split(" ");
}

const parseTrends = (trends: string[]) => {
  let englishTrends = filterToEnglishOnly(trends);
  let parsedTrends = [];
  englishTrends.forEach(trend => {
    if (trend[0] === "#") {
      let tripsObj = {
        trend: trend,
        words: splitByCapitalLetters(trend)
      };
      parsedTrends.push(tripsObj);
    } else {
      let tripsObj = {
        trend: trend,
        words: splitBySpace(trend)
      };
      parsedTrends.push(tripsObj);
    }
  });
};

export default parseTrends;
