const nodemailer = require("nodemailer");
const { getUsers } = require("../controllers/user");

async function sendEmail(emails) {

  let transporter = nodemailer.createTransport({
    host: process.env.AWS_HOST,
    port: process.env.AWS_PORT,
    secure: false, 
    auth: {
      user: process.env.AWS_USER, 
      pass: process.env.AWS_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.AWS_ADMIN_EMAIL, // sender address
    to: emails, //['JuanMBriones@outlook.com'], // list of receivers
    subject: "Welcome🎉", // Subject line
    text: "Welcome to our newsletter🥳", // plain text body
    html: "<b>Welcome to ACME company newsletter! 🥳🎉🎉🎉</b>" +
      "<br />" + 
      "<img src='https://acegif.com/wp-content/uploads/2021/4fh5wi/welcome-7.gif'"+
      "alt='welcome' style='width:380px;height:380px;'>",
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

const sendEmailEveryone = async (req, res) => {
  //const { email } = req.body;
  const emails = await getUsers();

  sendEmail(emails).catch(console.error);

  res.status(200).json({
      ok: true,
      message:'Email sent successfully'
  })

}

module.exports = {
  sendEmailEveryone,
  sendEmail,
};
