export function filterToEnglishOnly(trends: string[]) {
  let englishRegex = /[A-Za-z0-9]+/g;
  let englishOnly = trends.filter(trend => {
    if (trend.match(englishRegex)) {
      return trend;
    }
  });
  return englishOnly;
}
export function splitByCapitalLetters(trend: string) {}

const parseTrends = (trends: string[]) => {
  let englishTrends = filterToEnglishOnly(trends);
  let parsedTrends = [];
  englishTrends.forEach(trend => {
    if (trend[0] === "#") {
      splitByCapitalLetters(trend.slice(1));
    } else {
      console.log(":");
    }
  });
};

export default parseTrends;
