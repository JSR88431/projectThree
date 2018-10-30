var axios = require("axios");
var cheerio = require("cheerio");
var request = require('request-promise');

axios.get("http://redtri.com/mom-hacks/national/").then(function(response) {
  console.log(response.data);
  var $ = cheerio.load(response.data)
})

