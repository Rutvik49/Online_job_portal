const mongoose = require('mongoose')

const Post_job_Schema = new mongoose.Schema({
  companyID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  company_name: {
    type: String,
    require: true,
  },
  job_role: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  require_skills: {
    type: Array,
    require: true,
  },
  job_description: {
    type: String,
    require: true,
  },
  min_salary: {
    type: Number,
    require: true,
  },
  max_salary: {
    type: Number,
    require: true,
  },
})

module.exports = mongoose.model('Post_job', Post_job_Schema)
