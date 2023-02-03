const express = require('express')
const {
  companySignup,
  companySignin,
  candidateSignup,
  candidateSignin,
  candidateBio,
  GenerateOtp,
} = require('../controllers')
const router = express.Router()
const { validate, localVariables, VerifyOtp } = require('../middleware/validate')

router.get('/generateotp', localVariables, GenerateOtp)
router.post('/auth/candidatesignup', VerifyOtp, candidateSignup)
router.post('/auth/candidatesignin', candidateSignin)
router.post('/auth/companysignup', VerifyOtp, companySignup)
router.post('/auth/companysignin', companySignin)
router.post('/candidatebio', validate, candidateBio)

module.exports = router