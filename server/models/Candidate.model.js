const mongoose = require('mongoose')

const CandidateSchema = new mongoose.Schema({
    full_name:{
        type : String,
        require: true
    },
    email:{
        type : String,
        require: true,
        unique : true
    },
    top_skills:{
        type : Array,
        require: true
    },
    contact_no:{
        type : Number,
        require: true,
        unique : true
    },
    password:{
        type : String,
        require: true
    },
})

module.exports= mongoose.model('Candidate',CandidateSchema)