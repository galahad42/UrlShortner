const express = require("express");
const URL = require("../models/url"); // Make sure the path to your URL model is correct

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if(!req.user) return res.redirect('/login');
    const allurls = await URL.find({ createdBy: req.user._id });
    return res.render("home", {
      urls: allurls,
    });
  } catch (error) {
    console.error("Error fetching URLs:", error);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/signup", (req,res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

console.log("Router exported successfully");

module.exports = router;
