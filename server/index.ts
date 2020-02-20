// @ts-ignore
import express = require("express");
import parseTrends from "./ParseTrends";
import Twit = require("twit");
import { config as dotenvconfig } from "dotenv";
dotenvconfig();

const serverless = require("serverless-http");

var config = require("./config.ts");

interface Trend {
  [key: string]: string;
}

const app = express();
const router = express.Router();

var T = new Twit(config);

// 3534 is the code for Canada
var params = {
  id: "1"
};

router.get("/trends", (req, res) => {
  T.get("trends/place", params, (err, data, response) => {
    if (err) {
      console.log(err);
      return {
        error: true
      };
    }
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

app.use("/.netlify/functions/index", router);

module.exports = app;
module.exports.handler = serverless(app);
