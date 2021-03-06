const router = require("express").Router();
var Sequelize = require("sequelize");
// const familyRestaurant = require("../models/familyRestaurant.js");
// const MomsLaClasses = require("../models/momsLaClasses.js");

const db = require("../models")


router.get("/home", function (req, res) {
    res.send("Family Restaurant");
});

//  -------- VACATIONS  ------------------

router.get("/allVacations/", function (req, res) {
    // axios.get
    // Grab every document in the Articles collection
    db.Vacations.findAll({})
        .then(function (data) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(data);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});


//  -------- FAMILY RESTAURANTS ------------------

router.get("/allRestaurants/", function (req, res) {
    // axios.get
    // Grab every document in the Articles collection
    db.Restaurants.findAll({})
        .then(function (data) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(data);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

// ------------ LA CURBED 30 THINGS TO DO IN LA WITh KIDS -------------------

router.get("/alllaCurbed/", function (req, res) {
    // Grab every document in the Articles collection
    db.laCurbed.findAll({})
        .then(function (scrapeDb) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(scrapeDb);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});



//  ------- RedTri Hacks -----------------------
router.get("/allRedTriHacks", function (req, res) {
    db.RedTriHacks.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});


// --------- MomsLaClasses ----------------------

router.get("/allMomsLaClasses", function (req, res) {
    db.MomsLaClasses.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});

// ----------- MOMS LA DONATE -------------------

router.get("/allDonate", function (req, res) {
    db.Donate.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});

// ----------- RED TRI THINGS TO DO  -------------------

router.get("/allRedTriTtd", function (req, res) {
    db.RedTriTtd.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});

// ------------- KIDS GUIDE CALENDAR --------------

router.get("/allKidsGuideCal", function (req, res) {
    db.KidsGuideCal.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});

// ----------- DAD FORUM ---------------------------

router.get("/allDadForum", function (req, res) {
    db.DadForum.findAll({})
        .then(function (scrapeDb) {
            res.json(scrapeDb);
        })
        .catch(function (err) {
            res.json(err);

        });
});


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
        },
        attributes: {
            include: [[Sequelize.fn("COUNT", Sequelize.col("Posts.id")), "postCount"]]
        },
        include: [{
            model: db.Post, attributes: []
        }],
        group: ["Topic.id"]
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
router.post("/topics/:catId", isLoggedIn, function (req, res) {

    let newTopic = req.body;

    if (req.user.facebookId) {

        newTopic.owner = req.user.firstname + " " + req.user.lastname

        db.Topic.create(newTopic)
            .then(function (data) {
                res.json(data.id);
            })
            .catch(function (err) {
                res.json(err);
            });

    } else {

        newTopic.owner = req.user.username

        db.Topic.create(newTopic)
            .then(function (data) {
                res.json(data.id);
            })
            .catch(function (err) {
                res.json(err);
            });

    }


});

// Post a new Post to specific Topic
router.post("/posts/:topicId", isLoggedIn, function (req, res) {

    let info = JSON.stringify(req.user);
    console.log("req.user: " + info)

    let userInfo = req.body

    if (req.user.facebookId) {

        userInfo.UserId = req.user.id
        userInfo.author = req.user.firstname + " " + req.user.lastname

        db.Post.create(userInfo)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    } else {

        userInfo.UserId = req.user.id
        userInfo.author = req.user.username

        db.Post.create(userInfo)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    }

});




function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.json(false);

}

// ----- Forum DELETEs


// DELETE topic
router.delete("/topics/:topicId/:owner", isLoggedIn, function (req, res) {

    console.log(req.user.username)
    console.log(req.params.owner)

    if (req.user.facebookId) {

        let fbUser = req.user.firstname + " " + req.user.lastname

        if (fbUser === req.params.owner) {

            res.json(true)

            db.Topic.destroy({
                where: {
                    id: req.params.topicId
                }
            })
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });

        } else {

            res.json("You cannot delete others' topics.")
        }

    } else {

        if (req.user.username === req.params.owner) {

            res.json(true)

            db.Topic.destroy({
                where: {
                    id: req.params.topicId
                }
            })
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });

        } else {

            res.json("You cannot delete others' topics.")
        }
    }

});

// DELETE post
router.delete("/posts/:postId/:userId/:author", isLoggedIn, function (req, res) {

    // Using `==` here because req.user.id is a number and req.params.userId is a string
    if (req.user.facebookId) {

        let fbUser = req.user.firstname + req.user.lastname

        if (fbUser == req.params.author) {

            res.json(true)

            db.Post.destroy({
                where: {
                    id: req.params.postId
                }
            })
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });
        } else {
            res.json("You cannot delete others' posts.")
        }

    } else {
        if (req.user.id == req.params.userId) {

            res.json(true)

            db.Post.destroy({
                where: {
                    id: req.params.postId
                }
            })
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });
        } else {
            res.json("You cannot delete others' posts.")
        }

    }


});

router.delete("/alltopics", function (req, res) {

    // Using `==` here because req.user.id is a number and req.params.userId is a string


    db.Topic.destroy({
        where: {
            id: {
                [Sequelize.Op.gt]: 0
            }
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });

});

router.delete("/allposts", function (req, res) {

    // Using `==` here because req.user.id is a number and req.params.userId is a string


    db.Post.destroy({
        where: {
            id: {
                [Sequelize.Op.gt]: 0
            }
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });

});

// Test User Insert

router.post("/testuser", function (req, res) {

    db.User.findOrCreate({
        where: {
            username: 'TestUser'
        },
        defaults: {
            email: 'test@test.com',
            password: '$2a$08$qjLceM.RWEih7iK8VWe40OqQwHc9CvpPDkjInD.BCDP2eW.xYi1x.'
        }
    })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.json(err);
        });
});

// Get logged in username

router.get("/username", function (req, res) {

    if (req.user.facebookId) {

        let fbUser = req.user.firstname + " " + req.user.lastname

        res.json(fbUser)

    } else {

        res.json(req.user.username)

    }


});


// ---------- END FORUM SECTION ----------




module.exports = router;