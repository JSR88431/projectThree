const router = require('express').Router();

//REQUIRE ROUTES
const apiRoutes = require("./api");
const john = require("./john");
const joseph = require("./joseph");
const carrie = require("./carrie");
const forum = require('./forum');


// INITIALIZE ROUTERS
router.use("/api", apiRoutes);
router.use("/john", john);
router.use("/joseph", joseph);
router.use("/carrie", carrie);

module.exports = router; 