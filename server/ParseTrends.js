"use strict";
// EDGE CASES THAT AREN'T COVERED (for now :) )
// all these edge cases only apply to trends with hashtags
// #trendslikethis  --> this from my understanding will require some sort of dictionary of words
// #UTDvsLIV  --> a trend that has acronym followed by a lowercase words (or another acronym like here)
// #AcronymsOnlyAtTheStartFML --> acronyms are only picked up at the beginning of the trend
exports.__esModule = true;
function filterToEnglishOnly(trends) {
    var englishRegex = /[A-Za-z0-9]+/g;
    var englishOnly = trends.filter(function (trend) {
        if (trend.match(englishRegex)) {
            return trend;
        }
    });
    return englishOnly;
}
function splitHashtagTrend(trend) {
    var words = trend.match(/[A-Z][a-z]+/g);
    var numbers = trend.match(/[0-9]+/g);
    var capitals = trend.match(/[A-Z]+/g);
    // check for an acronym at the beginning
    if (capitals !== null && words !== null) {
        capitals.forEach(function (instance) {
            if (instance.length > 1) {
                if (instance.slice(-1) === words[0][0]) {
                    words.unshift(instance.slice(0, -1));
                }
            }
        });
    }
    // add numbers if there any
    if (numbers !== null && words !== null) {
        var results = words.concat(numbers);
        return results;
    }
    return words;
}
function splitNonHashtagTrend(trend) {
    return trend.split(" ");
}
var parseTrends = function (trends) {
    var englishTrends = filterToEnglishOnly(trends);
    var parsedTrends = {};
    englishTrends.forEach(function (trend) {
        if (trend[0] === "#") {
            var words = splitHashtagTrend(trend);
            if (words !== null) {
                parsedTrends[trend] = words;
            }
        }
        else {
            var words = splitNonHashtagTrend(trend);
            parsedTrends[trend] = words;
        }
    });
    return parsedTrends;
};
exports["default"] = parseTrends;
