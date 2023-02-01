const express = require('express')
const { candidateSignup,GenerateOtp } = require('../controllers')
const router = express.Router()
const {localVariables} = require('../middleware/validate')

router.post('/auth/candidatesignup',candidateSignup);
router.get('/generateotp',localVariables ,GenerateOtp);

module.exports = router;