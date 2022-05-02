const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/main");

/* GET home page. */
router.get("/", ctrl.home);
router.get("/sobre-nosotros", ctrl.aboutUs);
router.get("/contactanos", ctrl.contactUs);

module.exports = router;
