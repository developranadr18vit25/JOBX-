const express = require("express");
const router = express.Router();
const path = require("path");
const availableJobsController = require("../controllers/availableJobsController");
const verification=require("../jwt/verification");


router.route("/posted")
    .post(availableJobsController.handleApplication)

module.exports = router;