"use strict";
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
function splitByCapitalLetters(trend) {
    // what about 2020 or other numbers? KONY2020 --> "Kony", "2020"
    return trend.match(/[A-Z][a-z]+/g);
}
function splitBySpace(trend) {
    return trend.split(" ");
}
var parseTrends = function (trends) {
    var englishTrends = filterToEnglishOnly(trends);
    var parsedTrends = {};
    englishTrends.forEach(function (trend) {
        if (trend[0] === "#") {
            var words = splitByCapitalLetters(trend);
            if (words !== null) {
                parsedTrends[trend] = words;
            }
        }
        else {
            var words = splitBySpace(trend);
            parsedTrends[trend] = words;
        }
    });
    return parsedTrends;
};
exports["default"] = parseTrends;
