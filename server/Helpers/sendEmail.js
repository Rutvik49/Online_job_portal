const nodemailer = require("nodemailer");

async function sendMail(otp) {
  let transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
      user: "onlinejobportal@gmail.com",
      pass: "2C2D136A677898414C895135DDC214D9D56D",
    },
  });
  let info = await transporter.sendMail({
    from: 'onlinejobportal@gmail.com',
    to: "haakarr01@gmail.com",
    subject: "Hello ✔",
    text: otp,
    // html: "<b>`${otp}`</b>",
  })
  console.log("email sent successfully");

}
module.exports = {
    sendMail
}
