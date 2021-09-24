const mongoose = require('mongoose')
const { NotFound } = require('http-errors')
const { Bank } = require('../../models')
const asyncCtrlWrapper = require('../../helpers/ctrlAsyncWrapper')

const remove = async (req, res, next) => {
  const { bankId } = req.params
  if (!mongoose.Types.ObjectId.isValid(bankId)) {
    throw NotFound('This bank was not found')
  }
  const removeBank = await Bank.findByIdAndDelete(bankId)
  if (!removeBank) {
    throw NotFound('This bank was not found')
  }
  res.status(204).json({
    status: 'No Content',
    code: 204,
    message: 'Bank deleted'

  })
}

module.exports = asyncCtrlWrapper(remove)
