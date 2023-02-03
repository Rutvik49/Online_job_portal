const express = require('express')
const {
  companySignup,
  companySignin,
  candidateSignup,
  candidateSignin,
  addCandidateBio,
  getCandidateBio,
  updateCandidateBio,
  GenerateOtp,
} = require('../controllers')
const router = express.Router()
const { validate, localVariables, VerifyOtp } = require('../middleware/validate')

router.get('/generateotp', localVariables, GenerateOtp)
router.post('/auth/candidatesignup', VerifyOtp, candidateSignup)
router.post('/auth/candidatesignin', candidateSignin)
router.post('/auth/companysignup', VerifyOtp, companySignup)
router.post('/auth/companysignin', companySignin)
router.post('/addcandidatebio', validate, addCandidateBio)
router.get('/getcandidatebio', validate, getCandidateBio)
router.put('/updatecandidatebio', validate, updateCandidateBio)

module.exports = router