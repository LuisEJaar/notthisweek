const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes
// router.get("/userProfile/:id",ensureAuth, postsController.getUserProfile);
// router.get("/gameFeed", ensureAuth, postsController.getFeed);
// router.get("/characterFeed", ensureAuth, postsController.getCharacterFeed);

router.get("/userProfile/:id", postsController.getUserProfile);
router.get("/gameFeed", postsController.getFeed);
router.get("/characterFeed", postsController.getCharacterFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
