const CANDIDATE = require('../models/Candidate.model')
const COMPANY = require('../models/Company.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otp_generator = require('otp-generator')
const { sendMail } = require('../Helpers/sendEmail')
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
      return res.status(400).send({ error: 'User Already Exists' })
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
    return res.status(500).send({ error: 'Faild To Register' })
  }
}

//  Candidate SignIn route
async function candidateSignin(req, res) {
  try {
    let user = await CANDIDATE.findOne({ email: req.body.email })
    if (user) {
      let passwordCompare = await bcrypt.compare(
        req.body.password,
        user.password,
      )
      if (passwordCompare) {
        const id = user.id
        const authtoken = jwt.sign(id, JWT_SECRET)
        return res.status(200).send({ authtoken })
      }
      return res.status(400).send({ error: 'Invalid Credential' })
    }
    return res.status(400).send({ error: 'User Not Found' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Login' })
  }
}

//  Company Signup route
async function companySignup(req, res) {
  try {
    let user = await COMPANY.findOne({ company_email: req.body.company_email })
    if (user) {
      return res.status(400).send({ error: 'Company Already Exists' })
    }
    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)
    user = await COMPANY.create({
      company_id: req.body.company_id,
      company_name: req.body.company_name,
      company_email: req.body.company_email,
      password: securePassword,
    })
    const id = user.id
    const authtoken = jwt.sign(id, JWT_SECRET)
    return res.status(200).send({ authtoken })
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error: 'Faild To Register' })
  }
}

//  Company SignIn route
async function companySignin(req, res) {
  try {
    let user = await COMPANY.findOne({ company_email: req.body.company_email })
    if (user) {
      let passwordCompare = await bcrypt.compare(
        req.body.password,
        user.password,
      )
      if (passwordCompare) {
        const id = user.id
        const authtoken = jwt.sign(id, JWT_SECRET)
        return res.status(200).send({ authtoken })
      }
      return res.status(400).send({ error: 'Invalid Credential' })
    }
    return res.status(400).send({ error: 'Company Not Found' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Login' })
  }
}

module.exports = {
  companySignup,
  companySignin,
  candidateSignup,
  candidateSignin,
  GenerateOtp,
}
