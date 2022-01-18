const {Router} = require("express")
const router = Router()

router.use(require("./turs.route"))
router.use(require("./comment.route"))
router.use(require("./hotels.route"))
router.use(require("./room.route"))
router.use(require("./cart.route"))
router.use(require("./user.route"))

module.exports = router