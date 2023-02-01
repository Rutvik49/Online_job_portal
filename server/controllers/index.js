const CANDIDATE = require('../models/Candidate.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otp_generator = require('otp-generator')
const {sendMail} = require('../Helpers/sendEmail')
const JWT_SECRET = 'chaudhary'

//  Generate OTP route
async function GenerateOtp(req, res) {
  req.app.locals.OTP = await otp_generator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  })
  sendMail(req.app.locals.OTP)
  return res.status(201).send({ OTP: req.app.locals.OTP })
}

//  Candidate Signup route
async function candidateSignup(req, res) {
  try {
    let user = await CANDIDATE.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).send({ error: 'email already registered' })
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
    return res.status(200).send({ authtoken })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: 'Faild to register' })
  }
}

//  Candidate SignIn route
async function candidateSignin(req, res) {
  try {
    let user = await CANDIDATE.findOne({ email: req.body.email })
    if (user) {
      let passwordCompare = await bcrypt.compare(req.body.password,user.password)
      if (passwordCompare) {
        const id = user.id
        const authtoken = jwt.sign(id, JWT_SECRET)
        return res.status(200).json({ authtoken })
      }
      return res.status(400).send({ error: 'Invalid pass Credential' })
    }
    return res.status(400).send({ error: 'Invalid email Credential' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed to login' })
  }
}

module.exports = {
  candidateSignup,
  candidateSignin,
  GenerateOtp,
}
