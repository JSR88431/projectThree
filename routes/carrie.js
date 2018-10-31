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


  router.get("/allRedTriHacks", function (req, res) {
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

     // // MOMS LA - DONATE 

  router.get("/scrapeDonate", function (req, res) {
    // console.log("hit function")
    axios.get("https://momsla.com/donate-childrens-clothes-around-los-angeles/").then(function (response) {
  
      var $ = cheerio.load(response.data);
  
      $(".article-content").each(function (i, element) {
        // WANT ONLY 1 TIME
        var donateInfo = $(element).find(".p").find("span").text();
        // REST TO SHOW TO DATABASE
        var title = $(element).find(".p3").find(".s1").find("b").text();
        var address = $(element).find(".p3").find("s1").text();
        var description = $(element).find(".p3").find("s1").find("b").text();
        var link = $(element).find(".p3").attr("href");
        console.log(donateInfo, title, address, description, link);

        if (donateInfo && title  && address && description && link) {
  
          db.Donate.create({
            donateInfo: donateInfo,
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

 // // MOMS LA - THINGS TO DO 

 router.get("/scrapeMomsLaTtd", function (req, res) {
 axios.get("http://redtri.com/things-to-do-with-kids/los-angeles/").then(function (response) {

    var $ = cheerio.load(response.data);

    $(".events").each(function (i, element) {
      var title = $(element).find(".item").find(".item-body").find(".h2").find("a").text();
      var image = $(element).find(".item").find(".wrapper-img").attr("href");
      var link = $(element).find(".item").find(".item-body").find("h2").find("a").attr("href");
     
      if (title && image && link) {

        db.MomsLaTtd.create({
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



  router.get("/allMomsLaTtd", function (req, res) {
    db.MomsLaTtd.findAll({})
      .then(function (scrapeDb) {
        res.json(scrapeDb);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // // LA PARENT EVENTS BY DATE -------------------------

  // var date = new Date();
  // var formattedDate = moment(date).format("MM/DD/YYYY");
  
  // var urls = {
  //   home: `https://www.laparent.com/events/${formattedDate}`
  // }


//  router.get("/scrapeLaParentEvents", function (req, res) {
//  axios.get("https://www.laparent.com/events/").then(function (response) {
 
//      var $ = cheerio.load(response.data);
 
//      $(".css-events-list").each(function (i, element) {
//        var title = $(element).find(".event-item").find(".info").find("a").text();
//        var location = $(element).find(".event-item").find(".info").find("i").text();
//        var description = $(element).find(".event-item").find(".info").find(".descr").text();
//        var image = $(element).find(".event-item").find(".image").find("a").find("href").find("img").attr("src");
//        var link = $(element).find(".event-item").find(".info").find("h4").find("a").attr("href");
      
//        if (title && location && image && description && link) {
 
//          db.LaParentEvents.create({
//            title: title, 
//            location: location, 
//            image: image,
//            description: description, 
//            link: link,
//          },
//            function (err, inserted) {
//              if (err) {
//                console.log(err);
//              }
//              else {
//                console.log(inserted);
//              }
//            });
//        }
//      });
//    }); 
//      res.send("Scrape Complete");
//    });
 
 
 
//    router.get("/allLaParentEvents", function (req, res) {
//      db.LaParentEvents.findAll({})
//        .then(function (scrapeDb) {
//          res.json(scrapeDb);
//        })
//        .catch(function (err) {
//          res.json(err);
//        });
//    });

  module.exports = router;