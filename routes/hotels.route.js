const { Router } = require("express");
const { hotelController } = require("../controllers/hotels.controller");
const router = Router();

const uploader = require('../middleware/upload.middlware')

router.get("/hotels", hotelController.getHotels);
router.post("/hotels", hotelController.addHotel);
router.delete("/hotels/:id", hotelController.deleteHotel);
router.patch("/hotels/:id", uploader ,hotelController.patchHotel);

module.exports = router;
