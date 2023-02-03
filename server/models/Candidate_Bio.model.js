const mongoose = require('mongoose')

const Candidate_Bio_Schema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  profile: {
    type: Buffer,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  bio: {
    type: String,
  },
})

module.exports = mongoose.model('Candidate_Bio', Candidate_Bio_Schema)
