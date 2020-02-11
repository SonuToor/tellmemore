interface Trends {
  [x: string]: string[];
}

function filterToEnglishOnly(trends: string[]) {
  let englishRegex = /[A-Za-z0-9]+/g;
  let englishOnly = trends.filter(trend => {
    if (trend.match(englishRegex)) {
      return trend;
    }
  });
  return englishOnly;
}
function splitByCapitalLetters(trend: string) {
  let words = trend.match(/[A-Z][a-z]+/g);
  let numbers = trend.match(/[0-9]+/g);
  if (numbers) {
    let results = words.concat(numbers);
    return results;
  }
  return words;
}

function splitBySpace(trend: string) {
  return trend.split(" ");
}

const parseTrends = (trends: string[]) => {
  let englishTrends = filterToEnglishOnly(trends);
  let parsedTrends: Trends = {};
  englishTrends.forEach(trend => {
    if (trend[0] === "#") {
      let words = splitByCapitalLetters(trend);
      if (words !== null) {
        parsedTrends[trend] = words;
      }
    } else {
      let words = splitBySpace(trend);
      parsedTrends[trend] = words;
    }
  });
  return parsedTrends;
};

export default parseTrends;
