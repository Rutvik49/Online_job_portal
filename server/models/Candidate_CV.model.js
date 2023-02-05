const mongoose = require('mongoose')

const Candidate_CV_Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  education: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  },
  projects: {
    type: String,
  },
  github_link: {
    type: String,
  },
  experience: {
    type : Boolean,
    require : true
  },
  company_name: {
    type: String,
  },
  company_website: {
    type: String,
  },
  working_role: {
    type: String,
  },
  time_spend: {
    type: Number,
  },
})

module.exports = mongoose.model('Candidate_CV', Candidate_CV_Schema)
