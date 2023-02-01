const nodemailer = require("nodemailer");
const mailgen = require('mailgen')

let smtpServer = {
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "julio93@ethereal.email", 
      pass: "G1s1EeP6tQEPfwZbEK", 
    },
}

let transporter = nodemailer.createTransport(smtpServer)

let mailGenerator = new mailgen({
    theme : "default",
    product : {
        name : "mailgen",
        link :"https://mailgen.js"
    }
}) 

export const sendEmail = async(otp)=>{
    var email = {
        body:{
            intro : "hii, Happy to have you onboard..!",
            OTP : otp
        }
    }
    var emailBody = mailGenerator.generate(email)
    
}