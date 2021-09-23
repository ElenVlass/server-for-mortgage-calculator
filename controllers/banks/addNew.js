const { Bank } = require('../../models')
const asyncCtrlWrapper = require('../../helpers/ctrlAsyncWrapper')

const addNew = async (req, res, next) => {
  const newBank = req.body
  const result = await Bank.create(newBank)
  res.status(201).json({
    status: 'Success',
    code: 201,
    result
  })
}

module.exports = asyncCtrlWrapper(addNew)
