const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/add-user",userController.AddUser);
// router.get("/get-user-data/:id",userController.GetUserDetails);
router.get("/get-user-data/:userName",userController.GetUserDetails);
router.put("/update-user/:id",userController.UpdateUserById);
router.delete("/delete-user/:id",userController.deleteUserById);
module.exports  = router;