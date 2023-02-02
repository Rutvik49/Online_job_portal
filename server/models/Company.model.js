const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    company_id:{
        type : String,
        require: true,
    },
    company_name:{
        type : String,
        require: true,
    },
    company_email:{
        type : String,
        require: true,
        unique : true
    },
    password:{
        type : String,
        require: true
    },
})

module.exports= mongoose.model('Company',CompanySchema)