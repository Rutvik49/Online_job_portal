const express = require('express')
const { candidateSignup, candidateSignin, GenerateOtp } = require('../controllers')
const router = express.Router()
const {localVariables, VerifyOtp} = require('../middleware/validate')

router.get('/generateotp',localVariables ,GenerateOtp);
router.post('/auth/candidatesignup', VerifyOtp ,candidateSignup);
router.post('/auth/candidatesignin',candidateSignin);

module.exports = router;