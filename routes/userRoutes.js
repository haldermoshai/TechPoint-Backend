const express = require ("express");

const router = express.Router();

const userController = require ("../controllers/userController");

//connecting all controllers from user controller to router
router.post ("/users", userController.createUser);

router.get ("/users", userController.users);

router.get ("/users/:id", userController.singleUser);

router.delete ("/users/:id", userController.deleteUser);

router.put ("/users/:id", userController.updateUser);

module.exports = router;