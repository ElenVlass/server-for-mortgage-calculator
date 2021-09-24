const mongoose = require('mongoose')
const { Bank } = require('../../models')
const { NotFound } = require('http-errors')
const asyncCtrlWrapper = require('../../helpers/ctrlAsyncWrapper')

const getById = async (req, res, next) => {
  const { bankId } = req.params
  if (!mongoose.Types.ObjectId.isValid(bankId)) {
    throw NotFound('This bank was not found')
  }
  const bank = await Bank.findById(bankId)
  if (!bank) {
    throw NotFound('This bank was not found')
  }
  res.status(200).json({
    status: 'OK',
    code: 200,
    data: { bank }
  })
}

module.exports = asyncCtrlWrapper(getById)
