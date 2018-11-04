const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

// DAD ----- BC DAD MATTERS FORUM ------------------

router.get("/scrapeDadForum", function (req, res) {
  axios.get("https://www.dad.info/forum/index").then(function (response) {

    var $ = cheerio.load(response.data);

    $(".krow2").each(function (i, element) {
      var title = $(element).find(".kcol-mid").find(".kthead-title").find("span").children().text();
      var description = $(element).find(".kcol-mid").find(".kthead-desc").text();
      // console.log(title, description);


      if (title && description) {
        db.Category.create({
          title: title,
          description: description,
        }, {
        logging: false}
        )
      }
    });
  });

});


router.get("/allDadForum", function (req, res) {
  db.Category.findAll({})
    .then(function (scrapeDb) {
      res.json(scrapeDb);
    })
    .catch(function (err) {
      res.json(err);
    });
});

module.exports = router; 