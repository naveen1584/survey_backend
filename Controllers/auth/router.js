const router = require("express").Router();

const controller = require("./controller");

const { decodeJWTMiddleWare } = require("../../Helpers/Utils");

router.post("/createUser", decodeJWTMiddleWare, controller.createUser);

router.post("/createClientUser", controller.createUser);

router.post("/auth", controller.auth);

router.post("/forgotPassword", controller.forgotPassword);

router.get("/getUsersResetRequest", controller.getUsersResetRequest);

router.post("/resetPassword", controller.resetPassword);

router.get("/getRoles", decodeJWTMiddleWare, controller.getRoles);

router.get("/getUserByType/:roleID", decodeJWTMiddleWare, controller.getUserByTypes);

router.get("/getUserByID/:userId", decodeJWTMiddleWare, controller.getUserByID);

router.put("/deleteUser/:userId", decodeJWTMiddleWare, controller.deleteUser);

module.exports = router;
