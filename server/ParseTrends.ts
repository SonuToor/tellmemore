// EDGE CASES THAT AREN'T COVERED (for now :) )
// all these edge cases only apply to trends with hashtags
// #trendslikethis  --> this from my understanding will require some sort of dictionary of words
// #UTDvsLIV  --> a trend that has acronym followed by a lowercase words (or another acronym like here)
// #AcronymsOnlyAtTheStartFML --> acronyms are only picked up at the beginning of the trend

// these cases represent a small minority, so currently I'd say more than 90% of trends are parsed accurately
// so for now I think it's best to build out the rest of Tell Me More, then come back to these edge cases
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
function splitHashtagTrend(trend: string) {
  let words = trend.match(/[A-Z][a-z]+/g);
  let numbers = trend.match(/[0-9]+/g);
  let capitals = trend.match(/[A-Z]+/g);
  // check for an acronym at the beginning
  if (capitals !== null && words !== null) {
    capitals.forEach(instance => {
      if (instance.length > 1) {
        if (instance.slice(-1) === words[0][0]) {
          words.unshift(instance.slice(0, -1));
        }
      }
    });
  }
  // add numbers if there any
  if (numbers) {
    let results = words.concat(numbers);
    return results;
  }
  return words;
}

function splitNonHashtagTrend(trend: string) {
  return trend.split(" ");
}

const parseTrends = (trends: string[]) => {
  let englishTrends = filterToEnglishOnly(trends);
  let parsedTrends: Trends = {};
  englishTrends.forEach(trend => {
    if (trend[0] === "#") {
      let words = splitHashtagTrend(trend);
      if (words !== null) {
        parsedTrends[trend] = words;
      }
    } else {
      let words = splitNonHashtagTrend(trend);
      parsedTrends[trend] = words;
    }
  });
  return parsedTrends;
};

export default parseTrends;
