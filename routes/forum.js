// const router = require("express").Router();
// var cheerio = require("cheerio");
// var axios = require("axios");
// var db = require("../models");


// // ---------------- Forums GETs

// router.get("/categories/all", function (req, res) {

//     db.Category.findAll({})
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// router.get("/categories/:categoryname", function (req, res) {

//     db.Category.findOne({
//         where: {
//             title: req.params.categoryname
//         },
//         include: [
//             {
//                 model: db.Topic, include: [
//                     {
//                         model: db.Post
//                     }]

//             }]
//     })
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// router.get("/topics", function (req, res) {

//     db.Topic.findAll({})
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// router.get("/posts", function (req, res) {

//     db.Post.findAll({})
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// // ---------------- Forums POSTs

// router.post("/categories", function (req, res) {

//     db.Category.create(req.body)
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// router.post("/topics", function (req, res) {

//     db.Topic.create(req.body)
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });

// router.post("/posts", function (req, res) {

//     db.Post.create(req.body)
//         .then(function (data) {

//             res.json(data);
//         })
//         .catch(function (err) {

//             res.json(err);
//         });
// });


// module.exports = router;