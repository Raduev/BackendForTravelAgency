const {Router} = require('express')
const upload = require('../middleware/upload.middlware')
const {roomController} = require('../controllers/room.controller')
const router = Router()

router.get('/getRooms', roomController.getRooms )
router.post('/addRooms', roomController.addRoom )
router.delete('/removeRoom/:id', roomController.removeRoom )
router.patch('/patchRoom/:id', roomController.patchRoom )
router.patch('/rooms/:id/avatar', upload.single('img'), roomController.updateImg)

module.exports = router

