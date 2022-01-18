const {Router} = require('express')
const {roomController} = require('../controllers/room.controller')
const router = Router()

router.get('/', roomController.getRooms )
router.post('/', roomController.addRoom )
router.delete('/', roomController.removeRoom )
router.patch('/', roomController.patchRoom )


module.exports = router

