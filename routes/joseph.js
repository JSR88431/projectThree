const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");

router.get("/allRestaurant", function(req, res) {
    // Grab every document in the Articles collection
    db.familyRestaurant.findAll({})
      .then(function(data) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  

  router.get("/scrapeAllRestaurant", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-restaurants/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item-body").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find("a").text();
        var link = $(element).find("a").attr("href");
  //       var image = $(element).parent().find(".wrapper-img").children().attr("src");
  // console.log(image);
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.familyRestaurant.create({
            title: title,
            link: link
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



  router.get("/scrapeClasses", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-vacation-ideas/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item-body").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find("a").text();
        var link = $(element).find("a").attr("href");
  
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.campClasses.create({
            title: title,
            link: link
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
    res.send("Scrape Complete 2");
  });


router.get("/allRestaurant", function(req, res) {
    // Grab every document in the Articles collection
    db.familyRestaurant.findAll({})
      .then(function(data) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  router.get("/scrapeAllRestaurant", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-restaurants/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item-body").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find("a").text();
        var link = $(element).find("a").attr("href");
  
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.familyRestaurant.create({
            title: title,
            link: link
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

  router.get("/scrapeClasses", function(req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-vacation-ideas/los-angeles/").then(function(response) {
      // Load the html body from axios into cheerio
      var $ = cheerio.load(response.data);
      // For each element with a "title" class
      $(".item-body").each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).find("a").text();
        var link = $(element).find("a").attr("href");
  
        // If this found element had both a title and a link
        if (title && link) {
          // Insert the data in the scrapedData db
          db.campClasses.create({
            title: title,
            link: link
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
    res.send("Scrape Complete 2");
  });

module.exports = router;