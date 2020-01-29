const express = require("express");
require("dotenv").config();

var Twit = require("twit");
var config = require("./config.ts");

const app = express();

var T = new Twit(config);

var params = {
  id: "1"
};

app.get("/trends", (req, res) => {
  T.get("trends/place", params, (err, data, response) => {
    let allTrends = data[0]["trends"];
    let shortList = allTrends.slice(0, 20);
    let trends = [];
    shortList.forEach(trend => {
      trends.push(trend["name"]);
    });
    res.send(trends).end();
  });
});

app.listen(8080);
