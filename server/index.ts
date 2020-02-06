// @ts-ignore
import express = require("express");
import parseTrends from "./ParseTrends";
import Twit = require("twit");
import { config as dotenvconfig } from "dotenv";
dotenvconfig();

var config = require("./config.ts");

interface Trend {
  [key: string]: string;
}

const app = express();

var T = new Twit(config);

var params = {
  id: "1"
};

app.get("/trends", (req, res) => {
  T.get("trends/place", params, (err, data, response) => {
    let allTrends: Trend[] = [];
    allTrends = data[0]["trends"];
    let shortList = allTrends.slice(0, 20);
    let trends: string[] = [];

    shortList.forEach(trend => {
      trends.push(trend["name"]);
    });
    let parsedTrends = parseTrends(trends);
    res.send(parsedTrends).end();
  });
});

app.listen(8080);
