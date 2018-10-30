const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");


// ---------------- Forums GETs

router.get("/categories/all", function (req, res) {

    db.Category.findAll({})
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

router.get("/categories/:categoryname", function (req, res) {

    db.Category.findOne({
        where: {
            title: req.params.categoryname
        },
        include: [
            {model: db.Topic, include: [
                {model: db.Post
                }]

            }]
    })
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

router.get("/topics", function (req, res) {

    db.Topic.findAll({})
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

router.get("/posts", function (req, res) {

    db.Post.findAll({})
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

// ---------------- Forums POSTs

router.post("/categories", function (req, res) {

    db.Category.create(req.body)
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

router.post("/topics", function (req, res) {

    db.Topic.create(req.body)
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});

router.post("/posts", function (req, res) {

    db.Post.create(req.body)
        .then(function (data) {

            res.json(data);
        })
        .catch(function (err) {

            res.json(err);
        });
});


router.get("/scrapeAllRestaurant", function (req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-restaurants/los-angeles/").then(function (response) {
        // Load the html body from axios into cheerio
        var $ = cheerio.load(response.data);
        // For each element with a "title" class
        $(".item-body").each(function (i, element) {
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
                    function (err, inserted) {
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



router.get("/scrapeClasses", function (req, res) {
    // Make a request via axios for the news section of `ycombinator`
    axios.get("http://redtri.com/family-vacation-ideas/los-angeles/").then(function (response) {
        // Load the html body from axios into cheerio
        var $ = cheerio.load(response.data);
        // For each element with a "title" class
        $(".item-body").each(function (i, element) {
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
                    function (err, inserted) {
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