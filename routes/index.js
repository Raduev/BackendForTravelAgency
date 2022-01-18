const {Router} = require("express")
const router = Router()

router.use(require("./turs.route"))
router.use(require("./comment.route"))
router.use(require("./hotels.route"))
router.use(require("./room.route"))
// router.use(require(""))
// router.use(require(""))

module.exports = router