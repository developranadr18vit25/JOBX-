const path=require("path");
const express=require("express");
const router=express.Router();
const applyController=require("../controllers/appliedJobsController");
const verifyRoles=require("../roles/verifyRoles");

router.route("/newJob")
    .post(applyController.handleApply); 

module.exports=router;    