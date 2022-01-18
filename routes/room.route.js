const {Router} = require('express')
const {roomController} = require('../controllers/room.controller')
const router = Router()

router.get('/getRooms', roomController.getRooms )
router.post('/addRooms', roomController.addRoom )
router.delete('/removeRoom/:id', roomController.removeRoom )
router.patch('/patchRoom/:id', roomController.patchRoom )


module.exports = router

