const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

// Redtri - Parenting - Dad Hacks

router.get("/scrapeDadForum", function (req, res) {
  axios.get("https://www.dad.info/forum/index").then(function (response) {
  
  var $ = cheerio.load(response.data);
  
  $(".item-body.fadeout").each(function (i, element) {
    var title = $(element).find("a").text();
    var link = $(element).find("a").attr("href");
    // var image = $(element).find("a").find("img").attr("src");
    // console.log(image);
  
  // $(".events-3-cols-grid").each(function (i, element) {
  //   var title = $(element).find(".item.col-xs-3").find(".item-body").find("h2").find("a").text();
  //   var link = $(element).find(".item.col-xs-3").find(".item-body").find("h2").find("a").attr("href");

    if (title && link) {
      
      db.DadForum.create({
        title: title,
        link: link,
        // image: image, 
      },
      
      function (err, inserted) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(inserted);
        }
      });
    }
  });
});
res.send("Scrape Complete");
});


router.get("/allDadForum", function (req, res) {
  db.DadForum.findAll({})
  .then(function (scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function (err) {
    res.json(err);
  });
});
