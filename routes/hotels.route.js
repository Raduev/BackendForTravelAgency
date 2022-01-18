const { Router } = require("express");
const { hotelController } = require("../controllers/hotels.controller");
const router = Router();

router.get("/hotels", hotelController.getHotels);
router.post("/hotels", hotelController.addHotel);
router.delete("/hotels/:id", hotelController.deleteHotel);
router.patch("/hotels/:id", hotelController.patchHotel);

module.exports = router;
