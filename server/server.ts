const express = require("express");
var Twit = require("twit");
var config = require("./config.ts");
const pino = require("express-pino-logger")();

const app = express();
app.use(pino);

console.log(config);
console.log(process.env.REACT_APP_TWITTER_APISECRET);
console.log(process.env.TWITTER_APIKEY);

// var T = new Twit(config);

// var params = {
//   id: "1"
// };

// T.get("trends/place", params, gotData);

// function gotData(err, data, response) {
//   var tweets = data;
//   // response.send(response);
//   console.log(JSON.stringify(tweets, undefined, 2));
// }
app.get("/hey", (req, res) => res.send("ho!"));

app.listen(8080);
