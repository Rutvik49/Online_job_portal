const CANDIDATE = require('../models/Candidate.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'chaudhary'
const otp_generator = require('otp-generator')

//  Generate OTP route
async function GenerateOtp (req,res){
  req.app.locals.OTP = await otp_generator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false})
  res.status(201).send({ OTP : req.app.locals.OTP })
}

//  Candidate Signup route
async function candidateSignup(req, res) {
  try {
    let user = await CANDIDATE.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: 'email already registered' })
    }
    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)
    user = await CANDIDATE.create({
      full_name: req.body.full_name,
      email: req.body.email,
      top_skills: req.body.top_skills,
      contact_no: req.body.contact_no,
      password: securePassword,
    })

    const id = user.id
    const authtoken = jwt.sign(id, JWT_SECRET)
    return res.status(200).json({ authtoken })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'faild to register' })
  }
}

module.exports = {
  candidateSignup,
  GenerateOtp
}
