const router = require("express").Router();
const familyRestaurant = require("../models/familyRestaurant.js");

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

router.get("/allLaFun", function(req,res) {
  db.FunLa.findAll({})
  .then(function(scrapeDb) {
    res.json(err);
  });
});

// ---------- FUN LA Events -----------------

router.get("/allFunLa", function(req,res) {
  db.FunLa.findAll({})
  .then(function(scrapeDb) {
    res.json(scrapeDb);
  })
  .catch(function(err) {
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


// ---------


module.exports = router;