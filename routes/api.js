const router = require("express").Router();
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


// ---------------- Forums GETS ---------------------

router.get("/categories/all", function (req, res) {
  db.Category.findAll({})
      .then(function (data) {
          res.json(data);
      })
      .catch(function (err) {
          res.json(err);
      });
});

router.get("/categories/:id", function (req, res) {
  db.Category.findOne({
      where: {
          title: req.params.id
      },
      include: [
          {
              model: db.Topic, include: [
                  {
                      model: db.Post
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

// ---------------- Forums POSTS -----------------------------

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