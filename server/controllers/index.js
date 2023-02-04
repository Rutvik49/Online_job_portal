const CANDIDATE = require('../models/Candidate.model')
const COMPANY = require('../models/Company.model')
const CANDIDATE_BIO = require('../models/Candidate_Bio.model')
const COMPANY_BIO = require('../models/Company_Bio.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const otp_generator = require('otp-generator')
const { sendMail } = require('../Helpers/sendEmail')

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
    const authtoken = jwt.sign(id, process.env.JWT_SECRET)
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
        const authtoken = jwt.sign(id, process.env.JWT_SECRET)
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
    const authtoken = jwt.sign(id, process.env.JWT_SECRET)
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
        const authtoken = jwt.sign(id, process.env.JWT_SECRET)
        return res.status(200).send({ authtoken })
      }
      return res.status(400).send({ error: 'Invalid Credential' })
    }
    return res.status(400).send({ error: 'Company Not Found' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Login' })
  }
}

//  Create Candidate Bio route
async function addCandidateBio(req, res) {
  try {
    let userBio = await CANDIDATE_BIO.findOne({ username: req.body.username })
    if (userBio) {
      return res.status(500).send({ error: 'Username Already Exists' })
    }
    userBio = await CANDIDATE_BIO.create({
      _id: req.body.id,
      profile: req.body.profile,
      username: req.body.username,
      bio: req.body.bio,
    })
    return res.status(200).send({ status: 'Bio Added Successfully' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Add Bio' })
  }
}

//  Get Candidate Bio route
async function getCandidateBio(req, res) {
  try {
    let userBio = await CANDIDATE_BIO.findById(req.body.id)
    if (userBio) {
      return res.status(200).send({ status: 'success', userBio })
    }
    return res.status(500).send({ error: 'Failed To Fetch Candidate Bio' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Add Bio' })
  }
}

//  Update Candidate Bio route
async function updateCandidateBio(req, res) {
  let { profile, bio } = req.body
  let updateBio = {}
  if (profile) {
    updateBio.profile = profile
  }
  if (bio) {
    updateBio.bio = bio
  }
  try {
    let userBio = await CANDIDATE_BIO.findById(req.body.id)
    if (userBio) {
      let update = await CANDIDATE_BIO.findByIdAndUpdate(
        userBio.id,
        { $set: updateBio },
        { new: true },
      )
      return res.status(200).send({ status: 'success', update })
    }
    return res.status(500).send({ error: 'Failed To Update Candidate Bio' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Update Candidate Bio' })
  }
}

//  Create Company Bio route
async function addCompanyBio(req, res) {
  try {
    let companyBio = await COMPANY_BIO.findOne({ _id: req.body.id })
    if (companyBio) {
      return res.status(500).send({ error: 'Failed To Add Bio' })
    }
    companyBio = await COMPANY_BIO.create({
      _id: req.body.id,
      logo: req.body.logo,
      website: req.body.website,
      location: req.body.location,
      description: req.body.description,
      companySize: req.body.companySize,
    })
    return res.status(200).send({ status: 'Bio Added Successfully' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Add Bio' })
  }
}

//  Get Company Bio route
async function getCompanyBio(req, res) {
  try {
    let companyBio = await COMPANY_BIO.findOne({ _id: req.body.id })
    if (companyBio) {
      return res.status(200).send({ status: 'sucess', companyBio })
    }
    return res.status(500).send({ error: 'Company Bio Not Found' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Get Bio' })
  }
}

//  Update Company Bio route
async function updateCompanyBio(req, res) {
  let { logo, website, location, description, companySize } = req.body
  let updateBio = {}
  if (logo) {
    updateBio.logo = logo
  }
  if (website) {
    updateBio.website = website
  }
  if (location) {
    updateBio.location = location
  }
  if (description) {
    updateBio.description = description
  }
  if (companySize) {
    updateBio.companySize = companySize
  }
  try {
    let companyBio = await COMPANY_BIO.findById(req.body.id)
    if (companyBio) {
      let update = await COMPANY_BIO.findByIdAndUpdate(
        companyBio.id,
        { $set: updateBio },
        { new: true },
      )
      return res.status(200).send({ status: 'success', update })
    }
    return res.status(500).send({ error: 'Failed To Update Company Bio' })
  } catch (error) {
    return res.status(500).send({ error: 'Failed To Update Company Bio' })
  }
}

module.exports = {
  companySignup,
  companySignin,
  candidateSignup,
  candidateSignin,
  addCandidateBio,
  getCandidateBio,
  updateCandidateBio,
  addCompanyBio,
  getCompanyBio,
  updateCompanyBio,
  GenerateOtp,
}
