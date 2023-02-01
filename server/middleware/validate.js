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
  localVariables,
  VerifyOtp,
}
