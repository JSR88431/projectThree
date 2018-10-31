const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

// la curbed scrape
router.get("/scrapeLaCurbed", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("https://la.curbed.com/maps/things-to-do-kids-los-angeles").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".c-mapstack__card").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find("h1").text();
        console.log(title);
        var link = $(element).find("a").eq(1).attr("href");
        var description = $(element).find("p").eq(0).text();
        var descriptionTwo = $(element).find("p").eq(1).text();
        var address = $(element).find("div.c-mapstack__address").text();
        // var image = $(element).find("a.EmbeddedMedia").attr("href");
        // var image = $("div.embed").children().find("href");
        // console.log(image);
        // var address = $(element).children().text();
        // If this found element had both a title and a link
        if (title && link && description && descriptionTwo && address) {
          // Insert the data in the scrapedData db
          db.laCurbed.create({
            title: title,
            link: link,
            description: description,
            descriptionTwo:descriptionTwo,
            address: address,
            // image: image            
          },
          function(err, inserted) {
            if (err) {
              // Log the error if one is encountered during the query
              console.log(err);
            }
            else {
              // Otherwise, log the inserted data
              console.log(inserted);
            }
          });
        }
      });
    });
    // Send a "Scrape Complete" message to the browser
    res.send("Scrape Complete");
  });
   
  router.get("/allLaCurbed", function(req, res) {
    // Grab every document in the Articles collection
    db.laCurbed.findAll({})
      .then(function(familyRestaurant) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(familyRestaurant);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  
  module.exports = router;
