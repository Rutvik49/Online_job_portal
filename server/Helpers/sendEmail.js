const nodemailer = require("nodemailer");

async function sendMail(otp) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "julio93@ethereal.email",
      pass: "G1s1EeP6tQEPfwZbEK",
    },
  });
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "bar@example.com, hello@gmail.com",
    subject: "Hello ✔",
    text: otp,
    // html: "<b>`${otp}`</b>",
  })
  console.log("email sent successfully");

}
module.exports = {
    sendMail
}
