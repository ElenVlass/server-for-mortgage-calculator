const { NotFound } = require('http-errors')
const { Bank } = require('../../models')
const asyncCtrlWrapper = require('../../helpers/ctrlAsyncWrapper')

const update = async (req, res, next) => {
  const { bankId } = req.params
  const updatedBankById = await Bank.findByIdAndUpdate(bankId, req.body, { new: true })
  if (!updatedBankById) {
    throw NotFound('This bank was not found')
  }
  res.status(200).json({
    updatedBankById
  })
}

module.exports = asyncCtrlWrapper(update)
