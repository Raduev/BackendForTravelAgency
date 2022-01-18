const { Router } = require("express");
const { hotelController } = require("../controllers/hotels.controller");
const router = Router();

const uploader = require('../middleware/upload.middlware')

router.get("/hotels", hotelController.getHotels);
router.post("/hotels", hotelController.addHotel);
router.delete("/hotels/:id", hotelController.deleteHotel);
router.patch("/hotels/:id", hotelController.patchHotel);
router.patch("/hotels/:id/avatar", uploader.single("img"), hotelController.updateImg)

module.exports = router;
