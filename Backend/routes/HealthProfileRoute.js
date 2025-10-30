const express = require('express');
const HealthData= require("../controllers/HealthProfileController");
//const userProfile = require("../controllers/userProfileController");
//const protect = require("../middleware/auth");
const  verifyToken  =require("../middleware/auth.js");
const router = express.Router();

//router.get("/", userProfile.getProfile);
router.post("/health-profile",verifyToken,HealthData.createHealthProfile);
//router.put("/update/:id", HealthData.updateProject);
//router.delete("/delete/:id", HealthData.deleteProject);
//router.get("/health-profile/me", verifyToken, HealthData.getUserHealthProfile);
router.get("/health-profile/me", verifyToken, HealthData.getUserInsights);

router.post("/health-profile/ai", verifyToken, HealthData.generateAIInsights);

module.exports=router
