const router = require('express').Router()
const { banks: controller } = require('../../controllers')

router.get('/', controller.getList)
router.post('/', controller.addNew)

module.exports = router
