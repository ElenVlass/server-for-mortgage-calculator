const router = require('express').Router()
const { banks: controller } = require('../../controllers')
const { joiValidation } = require('../../validation')
const { bankJoiSchema } = require('../../models/bank')

const validationMiddleware = joiValidation(bankJoiSchema)

router
  .get('/', controller.getList)
  .post('/', validationMiddleware, controller.addNew)
router
  .get('/:bankId', controller.getById)
  .put('/:bankId', validationMiddleware, controller.update)
  .delete('/:bankId', controller.remove)

module.exports = router
