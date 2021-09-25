const { Bank } = require('../../models')
const asyncCtrlWrapper = require('../../helpers/ctrlAsyncWrapper')

const getList = async (req, res, next) => {
  const {
    limit = 7,
    offset = 0,
    page = 1,
    sortBy,
    sortByDesc
  } = req.query

  const queryOptions = {
    limit,
    offset,
    sort: `${sortBy} -${sortByDesc}`
  }
  const { docs: banks, ...rest } = await Bank.paginate({}, queryOptions)

  res.status(200).json({
    status: 'OK',
    code: 200,
    data: { banks, ...rest }
  })
}

module.exports = asyncCtrlWrapper(getList)
