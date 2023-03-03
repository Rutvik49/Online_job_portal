const express = require('express')
const {
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
  addCandidateCV,
  getCandidateCV,
  updateCandidateCV,
  postJob,
  deleteJob,
  getTelentedEmp,
  GenerateOtp,
} = require('../controllers')
const router = express.Router()
const {
  validate,
  localVariables,
  VerifyOtp,
} = require('../middleware/validate')

router.get('/generateotp', localVariables, GenerateOtp)
router.post('/auth/candidatesignup', VerifyOtp, candidateSignup)
router.post('/auth/candidatesignin', candidateSignin)
router.post('/auth/companysignup', VerifyOtp, companySignup)
router.post('/auth/companysignin', companySignin)
router.post('/addcandidatebio', validate, addCandidateBio)
router.get('/getcandidatebio', validate, getCandidateBio)
router.put('/updatecandidatebio', validate, updateCandidateBio)
router.post('/addcompanybio', validate, addCompanyBio)
router.get('/getcompanybio', validate, getCompanyBio)
router.put('/updatecompanybio', validate, updateCompanyBio)
router.post('/addcandidatecv', validate, addCandidateCV)
router.get('/getcandidatecv', validate, getCandidateCV)
router.get('/getTelentedEmp', getTelentedEmp)
router.put('/updatecandidatecv', validate, updateCandidateCV)
router.post('/postjob', validate, postJob)
router.delete('/deletejob', validate, deleteJob)

module.exports = router
