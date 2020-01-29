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
  interface Trend {
    [x: string]: string[];
  }
  let parsedTrends: Trend[];
  parsedTrends = [];
  englishTrends.forEach(trend => {
    if (trend[0] === "#") {
      let words = splitByCapitalLetters(trend);
      if (words !== null) {
        let trendObj = {
          [trend]: words
        };
        parsedTrends.push(trendObj);
      }
    } else {
      let words = splitBySpace(trend);
      let trendObj = {
        [trend]: words
      };
      parsedTrends.push(trendObj);
    }
  });
  return parsedTrends;
};

export default parseTrends;
