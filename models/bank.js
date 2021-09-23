const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Joi = require('joi')

const bankSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact']
  },
  interestRate: {
    type: Number,
    require: true,
  },
  maximumLoan: {
    type: Number,
    require: true,
  },
  minimumDownPayment: {
    type: Number,
    require: true,
  },
  loanTerm: {
    type: Number,
    require: true,
  },
}, { versionKey: false, timestamps: true })

bankSchema.plugin(mongoosePaginate)

const bankJoiSchema = Joi.object({
  name: Joi.string().required(),
  interestRate: Joi.number().required(),
  maximumLoan: Joi.number().required(),
  minimumDownPayment: Joi.number().required(),
  loanTerm: Joi.number().required(),
})
const Bank = model('bank', bankSchema)

module.exports = {
  Bank,
  bankJoiSchema
}
