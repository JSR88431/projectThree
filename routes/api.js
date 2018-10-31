const router = require("express").Router();
// const familyRestaurant = require("../models/familyRestaurant.js");
// const MomsLaClasses = require("../models/momsLaClasses.js");

const db = require("../models")




router.get("/home", function(req, res) {
  res.send("Family Restaurant");
});



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

 
router.get("/allLaCurbed/", function(req, res) {
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

module.exports = router;