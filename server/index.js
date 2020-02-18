"use strict";
exports.__esModule = true;
// @ts-ignore
var express = require("express");
var ParseTrends_1 = require("./ParseTrends");
var Twit = require("twit");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var config = require("./config.ts");
var app = express();
var T = new Twit(config);
// 3534 is the code for Canada
var params = {
    id: "1"
};
app.get("/trends", function (req, res) {
    T.get("trends/place", params, function (err, data, response) {
        if (err) {
            console.log(err);
            return {
                error: true
            };
        }
        var allTrends = [];
        allTrends = data[0]["trends"];
        var shortList = allTrends.slice(0, 20);
        var trends = [];
        shortList.forEach(function (trend) {
            trends.push(trend["name"]);
        });
        var parsedTrends = ParseTrends_1["default"](trends);
        res.send(parsedTrends).end();
    });
});
app.listen(1234);
