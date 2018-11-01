const router = require("express").Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");
var moment = require('moment');


// Redtri - Parenting - Dad Hacks

router.get("/scrapeRedTriHacks", function (req, res) {
  axios.get("http://redtri.com/mom-hacks/national/").then(function (response) {

    var $ = cheerio.load(response.data);

    // $(".item-body.fadeout").each(function (i, element) {
    //   var title = $(element).find("a").text();
    //   var link = $(element).find("a").attr("href");
    //   console.log(title, link);

    $(".events-3-cols-grid").each(function (i, element) {
      var title = $(element).find(".item.col-xs-3").find(".item-body").find("h2").find("a").text();
      var link = $(element).find(".item.col-xs-3").find(".item-body").find("h2").find("a").attr("href");
      var image = $(element).find(".item.col-xs-3").find(".wrapper-img").find("a").find("img").attr("src");
    console.log(title, link, image);

    if (title && link && image) {

      db.RedTriHacks.create({
      title: title,
      link: link,
      image: image, 
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


  router.get("/allRedTriHacks", function (req, res) {
    db.RedTriHacks.findAll({})
      .then(function (scrapeDb) {
        res.json(scrapeDb);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // // MOMS LA - CLASSES ---------------

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

     // // MOMS LA - DONATE --------------------------------

  router.get("/scrapeDonate", function (req, res) {
    // console.log("hit function")
    axios.get("https://momsla.com/donate-childrens-clothes-around-los-angeles/").then(function (response) {
  
      var $ = cheerio.load(response.data);
  
      $(".article-content").each(function (i, element) {
        var title = $(element).find(".p3").find(".s1").find("b").text();
        var address = $(element).find(".p3").find("s1").text();
        var description = $(element).find(".p3").find("s1").find("b").text();
        var link = $(element).find(".p3").attr("href");
        console.log(title, address, description, link);

        if (title  && address && description && link) {
  
          db.Donate.create({
            title: title, 
            address: address, 
            description: description,
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
  
  
  
    router.get("/allDonate", function (req, res) {
      db.Donate.findAll({})
        .then(function (scrapeDb) {
          res.json(scrapeDb);
        })
        .catch(function (err) {
          res.json(err);
        });
    });

 // // REDTRI THINGS TO DO ---------------------

 router.get("/scrapeRedTriTtd", function (req, res) {
 axios.get("http://redtri.com/things-to-do-with-kids/los-angeles/").then(function (response) {

    var $ = cheerio.load(response.data);

    $(".item.col-xs-3").each(function (i, element) {
      var title = $(element).find(".item-body").find("h2").find("a").text();
      var image = $(element).find(".wrapper-img").find("a").find("img").attr("src");
      var link = $(element).find(".item-body").find("h2").find("a").attr("href");
      console.log(title, image, link);
     
      if (title && image && link) {

        db.RedTriTtd.create({
          title: title,
          image: image,
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



  router.get("/allRedTriTtd", function (req, res) {
    db.RedTriTtd.findAll({})
      .then(function (scrapeDb) {
        res.json(scrapeDb);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // KIDS GUIDE CALENDAR   -------------------------

  var date = new Date();
  var formattedDate = moment(date).format("YYYY/MM/DD");
  
  var urls = {
    withDate: `http://kidsguidemagazine.com/date/${formattedDate}`
  }

 router.get("/scrapeKidsGuideCal", function (req, res) {
 axios.get(urls.withDate).then(function (response) {
 
     var $ = cheerio.load(response.data);
 
     $(".post").each(function (i, element) {
       var title = $(element).find("h4").find("a").text();
       var description = $(element).find("h4").find(".entry").find("p").text();
       var link = $(element).find("h4").find("a").attr("href");
       console.log(title, description, link);
      
       if (title && description && link) {
 
         db.KidsGuideCal.create({
           title: title, 
           description: description, 
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
 
 
 
   router.get("/allKidsGuideCal", function (req, res) {
     db.KidsGuideCal.findAll({})
       .then(function (scrapeDb) {
         res.json(scrapeDb);
       })
       .catch(function (err) {
         res.json(err);
       });
   });

  module.exports = router;