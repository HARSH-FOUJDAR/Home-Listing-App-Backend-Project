const express = require("express");
const router = express.Router();

const homecontroller = require("../controller/homeController");

// Home page
router.get("/", homecontroller.getHome);

router.get("/Success", homecontroller.gethomepost)
// Add home form page
router.get("/Add-Home-form", homecontroller.getAddform);

// Form submit (POST) - Add
router.post("/Add-home", homecontroller.postaddhome);

// Home list page
router.get("/Home-List-Page", homecontroller.getHomelistpage);

// Edit Home form
router.get("/edit-home/:homeId", homecontroller.getEditHome);

// Edit Home submit (POST) - Update
router.post("/edit-home", homecontroller.postedithome);

// Delete home
router.post("/delete-home", homecontroller.postdelethome);

module.exports = router;
