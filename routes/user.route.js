const { usersController } = require("../controllers/users.controller");
const { Router } = require("express");
const auth = require('../middleware/auth.middleware')

const router = Router();

router.get("/users", usersController.getAllUsers);
router.get("/user",auth, usersController.getUserById);
router.post("/users", usersController.registerUser);
router.post("/login", usersController.login);
router.post('/admin', usersController.postAdmin)

module.exports = router;
