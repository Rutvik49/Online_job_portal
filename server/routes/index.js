const express = require('express')
const { candidateSignup, candidateSignin, GenerateOtp } = require('../controllers')
const router = express.Router()
const {localVariables} = require('../middleware/validate')

router.post('/auth/candidatesignup',candidateSignup);
router.post('/auth/candidatesignin',candidateSignin);
router.get('/generateotp',localVariables ,GenerateOtp);

module.exports = router;