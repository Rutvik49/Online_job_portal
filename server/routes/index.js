const express = require('express')
const { candidateSignup } = require('../controllers')
const router = express.Router();

//  Candidate Signup route
router.post('/candidatesignup',candidateSignup);

module.exports = router;