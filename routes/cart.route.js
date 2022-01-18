const { Router } = require("express");

const router = Router();

const { cartController } = require("../controllers/cart.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.get("/cart", authMiddleware, cartController.getCart);
router.delete("/cart/:id", authMiddleware, cartController.removeCart);
router.patch("/cart/:id", authMiddleware, cartController.patchCart);
router.post("/cartToken", authMiddleware, cartController.cartToken);

module.exports = router;
