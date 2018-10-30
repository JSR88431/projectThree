const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");

// FUN  WITH KIDS LA - THINGS TO DO - EVENTS 

router.get("/scrapeFunLa", function (req, res) {
  axios.get("https://www.funwithkidsinla.com/events").then(function (response) {
    var $ = cheerio.load(response.data);


    if (title && link && description && descriptionTwo && address) {

      db.FunLa.create({
        title: title,
        link: link,
        description: description,
        descriptionTwo: descriptionTwo,
        address: address
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
res.send("Scrape Complete");
  });


router.get("/allFunLa", function (req, res) {
  db.FunLa.findAll({})
    .then(function (scrapeDb) {
      res.json(scrapeDb);
    })
    .catch(function (err) {
      res.json(err);
    });
});


// Redtri - Parenting - Dad Hacks

router.get("/scrapeRedTriHacks", function (req, res) {
  console.log("hit function")
  axios.get("http://redtri.com/mom-hacks/national/").then(function (response) {

    var $ = cheerio.load(response.data);
    console.log(response.data);
    res.send(response.data);


    // if (title && link && description && descriptionTwo && address) {

      db.RedTriHacks.create({
      title: title,
      link: link,
      description: description,
      descriptionTwo: descriptionTwo,
      address: address
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

    res.send("Scrape Complete");
});


router.get("/allRedTriHacks", function (req, res) {
  db.RedTriHacks.findAll({})
    .then(function (scrapeDb) {
      res.json(scrapeDb);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// MOMS LA - CLASSES 

router.get("/scrapeMomsLaClasses", function (req, res) {
  axios.get("https://momsla.com/school-classes-guide/").then(function (response) {
    var $ = cheerio.load(response.data);


    if (title && link && description && descriptionTwo && address) {

      db.MomsLaClasses.create({
        title: title,
        link: link,
        description: description,
        descriptionTwo: descriptionTwo,
        address: address
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
res.send("Scrape Complete");
    });


router.get("/allMomsLaClasses", function (req, res) {
  db.MomLaClsses.findAll({})
    .then(function (scrapeDb) {
      res.json(scrapeDb);
    })
    .catch(function (err) {
      res.json(err);
    });
});





module.exports = router;