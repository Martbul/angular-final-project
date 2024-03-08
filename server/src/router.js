const router = require("express").Router();

const appController = require("./controllers/appController");
const orderController = require("./controllers/post-appController");
const userController = require("./controllers/userController");
const deliverController = require("./controllers/deliverController");
const profileController = require("./controllers/profileController");

router.use("/app-finder", appController);
router.use("/create-app", orderController);
router.use("/users", userController);
// router.use('/delivers',deliverController) 
router.use("/profile", profileController);

module.exports = router;
