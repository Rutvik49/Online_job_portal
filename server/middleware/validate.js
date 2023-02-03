const jwt = require('jsonwebtoken')

// JWT verification Middleware
function validate(req, res, next) {
  try {
    let token = req.headers['authtoken']
    if (!token) {
      return res.status(400).send({ error: "Invalid Authentication" })
    }
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.body.id = data
    next()
  } catch (error) {
    console.error(error.message)
    return res.status(500).send({ error : 'Invalid Authentication'})
  }
}

//  Store OTP Middleware
function localVariables(req, res, next) {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  }
  next()
}
//  Vrrify OTP Middleware
async function VerifyOtp(req, res, next) {
  let otp = req.body.OTP
  if (otp === parseInt(req.app.locals.OTP)) {
    req.app.locals.OTP = null
    req.app.locals.resetSession = true
    return next()
  }
  return res.status(400).send({ error: 'Invalid OTP' })
}

module.exports = {
  validate,
  localVariables,
  VerifyOtp,
}
