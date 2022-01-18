const { Router } = require("express");
const { controllerTur } = require("../controllers/turs.controller");

const router = Router();

router.post("/turs", controllerTur.postTur)
router.get("/turs", controllerTur.getTurs);
router.patch("/turs/:id", controllerTur.patchTur);
router.delete("/turs/:id", controllerTur.deleteTur);

module.exports = router;
