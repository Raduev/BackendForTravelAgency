const { Router } = require("express");
const { controllerTur } = require("../controllers/turs.controller");
const uploadMiddleware = require("../middleware/upload.middlware")

const router = Router();

router.post("/turs", controllerTur.postTur)
router.get("/tur/:id", controllerTur.getByTur)
router.get("/turs", controllerTur.getTurs);
router.patch("/turs/:id", controllerTur.patchTur);
router.delete("/turs/:id", controllerTur.deleteTur);
router.patch("/turs/:id/avatar", uploadMiddleware.single("img"), controllerTur.updateImg)

module.exports = router;
