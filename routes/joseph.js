const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

// --------------- RED TRI FAMILY RESTAURANTS ------------------

  router.get("/scrapeAllRestaurants", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-restaurants/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find(".item-body").find("h2").find("a").text();
        var link = $(element).find(".item-body").find("h2").find("a").attr("href");
        // var image = $(element).find(".wrapper-img").find("a").find("img").attr("src");
      
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.Restaurants.create({
            title: title,
            link: link,
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
  router.get("/allRestaurants", function(req, res) {
    // Grab every document in the Articles collection
    db.Restaurants.findAll({})
      .then(function(familyRestaurant) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(familyRestaurant);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

// ---------- REDTRI FAMILY VACATIONS --------------------

  router.get("/scrapeVacations", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-vacation-ideas/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find(".item-body").find("h2").find("a").text();
        var link = $(element).find(".item-body").find("h2").find("a").attr("href");
        var image = $(element).find(".wrapper-img").find("a").find("img").attr("src");
  
        // If this found element had both a title and a link
        if (title && link && image) {
          // Insert the data in the scrapedData db
          db.Vacations.create({
            title: title,
            link: link,
            image: image,
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


router.get("/allVacations", function(req, res) {
    // Grab every document in the Articles collection
    db.Vacations.findAll({})
      .then(function(data) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });




module.exports = router;