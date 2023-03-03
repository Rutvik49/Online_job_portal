const mongoose = require('mongoose')

const Company_Bio_Schema = new mongoose.Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  logo: {
    type: String,
  },
  website: {
    type: String,
    require: true,
    unique: true,
  },
  location: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  companySize: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model('Company_Bio', Company_Bio_Schema)
