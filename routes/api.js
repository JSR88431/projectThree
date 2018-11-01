const router = require("express").Router();
var Sequelize = require("sequelize");
// const familyRestaurant = require("../models/familyRestaurant.js");
// const MomsLaClasses = require("../models/momsLaClasses.js");

const db = require("../models")




router.get("/home", function(req, res) {
  res.send("Family Restaurant");
});

//  -------- VACATIONS  ------------------

router.get("/allVacations/", function(req, res) {
  // axios.get
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


//  -------- FAMILY RESTAURANTS ------------------

router.get("/allRestaurant/", function(req, res) {
  // axios.get
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

// ------------ LA CURBED 30 THINGS TO DO IN LA WITh KIDS -------------------
 
router.get("/alllaCurbed/", function(req, res) {
  // Grab every document in the Articles collection
  db.laCurbed.findAll({})
    .then(function(scrapeDb) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(scrapeDb);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



//  ------- RedTri Hacks -----------------------
router.get("/allRedTriHacks", function(req,res) {
  db.RedTriHacks.findAll({})
  .then(function(scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function(err) {
    res.json(err);

  });
  });


// --------- MomsLaClasses ----------------------

router.get("/allMomsLaClasses", function(req,res) {
  db.MomsLaClasses.findAll({})
  .then(function(scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function(err) {
    res.json(err);

  });
  });

// -------------------------- FORUMS ---------------------------------

// ---------------- Forums GETS ---------------------


// GET alls
router.get("/categories/all", function (req, res) {
  db.Category.findAll({})
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});

// router.get("/categories/:id", function (req, res) {
//   db.Category.findOne({
//       where: {
//           title: req.params.id
//       },
//       include: [
//           {
//               model: db.Topic, include: [
//                   {
//                       model: db.Post
//                   }]
//           }]
//   })
//       .then(function (data) {
//           res.json(data);
//       })
//       .catch(function (err) {
//           res.json(err);
//       });
// });

router.get("/topics/all", function (req, res) {
  db.Topic.findAll({
    //   attributes: {
    //       include: [[Sequelize.fn("COUNT", Sequelize.col("posts.TopicId")), "postNumber"]]
    //   },
    //   include: [{
    //       model: db.Post, attributes: []
    //   }]
  })
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});

router.get("/posts/all", function (req, res) {
    db.Post.findAll({})
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
  });


// GET specifics
router.get("/topics/:catId", function (req, res) {
    console.log(req.params.catId)
    db.Topic.findAll({
        where: {
            CategoryId: req.params.catId
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
  });

router.get("/posts/:topicId", function (req, res) {
    console.log(req.params.topicId)
    db.Post.findAll({
        where: {
            TopicId: req.params.topicId
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
  });

  router.get("/posts/:userId", function (req, res) {

    db.Post.findAll({
        where: {
            UserId: req.params.userId
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
  });

// ---------------- Forums POSTS -----------------------------

// Post new category (only used for testing)
router.post("/categories", function (req, res) {
  db.Category.create(req.body)
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});

// Post new Topic to specific Category
router.post("/topics/:catId", function (req, res) {

    let newTopic = req.body;
    console.log(newTopic)

  db.Topic.create(req.body)
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});

// Post a new Post to specific Topic
router.post("/posts/:topicId/:userId", function (req, res) {


  db.Post.create(req.body)
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});




function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.json(false);

}

// ---------- END FORUM SECTION ----------



// ----------- MOMS LA DONATE -------------------

router.get("/allDonate", function(req,res) {
  db.Donate.findAll({})
  .then(function(scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function(err) {
    res.json(err);

  });
  });

  // ----------- MOMS LA THINGS TO DO  -------------------

router.get("/allMomsLaTtd", function(req,res) {
  db.MomsLaTtd.findAll({})
  .then(function(scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function(err) {
    res.json(err);

  });
  });

  // ------------- LA PARENT CALENDAR OF EVENTS --------------

  // router.get("/allLaParentEvents", function(req,res) {
  //   db.LaParentEvents.findAll({})
  //   .then(function(scrapeDb) {
  //     res.json(scrapeDb);
  //   })
  //   .catch(function(err) {
  //     res.json(err);
  
  //   });
  //   });

module.exports = router;