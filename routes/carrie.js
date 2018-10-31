const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");


// Redtri - Parenting - Dad Hacks

router.get("/scrapeRedTriHacks", function (req, res) {
  axios.get("http://redtri.com/mom-hacks/national/").then(function (response) {

    var $ = cheerio.load(response.data);

    $(".item-body.fadeout").each(function (i, element) {
      var title = $(element).find("a").text();
      var link = $(element).find("a").attr("href");
      console.log(title, link);

    if (title && link) {

      db.RedTriHacks.create({
      title: title,
      link: link,
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


  router.get("/allMomsLaClasses", function (req, res) {
    db.RedTriHacks.findAll({})
      .then(function (scrapeDb) {
        res.json(scrapeDb);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // // MOMS LA - CLASSES 

  router.get("/scrapeMomsLaClasses", function (req, res) {
    // console.log("hit function")
    axios.get("https://momsla.com/school-classes-guide/").then(function (response) {
  
      var $ = cheerio.load(response.data);
  
      $(".mainPageCat").each(function (i, element) {
        var title = $(element).find("h2").text();
        var link = $(element).find("h2").find("a").attr("href");
        var description = $(element).find(".entry").find("p").eq(2).text();
        var image = $(element).find(".entry").find("img").attr("src");
       
        if (title && link && description && image) {
  
          db.MomsLaClasses.create({
            title: title,
            link: link,
            description: description,
            image: image
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
  
  
  
    router.get("/allMomsLaClasses", function (req, res) {
      db.MomsLaClasses.findAll({})
        .then(function (scrapeDb) {
          res.json(scrapeDb);
        })
        .catch(function (err) {
          res.json(err);
        });
    });



  module.exports = router;