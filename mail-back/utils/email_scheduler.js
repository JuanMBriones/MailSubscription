/* eslint-disable max-len */
const AWS = require('aws-sdk');
const {getRecipients} = require('./email_recipients');

AWS.config.update({
  region: 'us-east-2',
});

const ses = new AWS.SES();

exports.handler = async (event) => {
  const emails = await getRecipients();

  // TODO: Get emails by calling the REST API
  const params = {
    Destination: {
      ToAddresses: emails['mails'],
    },
    Message: {
      Subject: {
        Data: 'Daily Newsletter 📰📰📰',
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<h3>Hello there!😎</h3><br/>
                <p>We are going to tell you the good news from ACME company! 😎</p>
                <br/>
                <img src='https://acegif.com/wp-content/gifs/hello-36.gif'"+
                "alt='Hi' style='width:380px;height:380px;'>
                `,
        },
        Text: {
          Data: 'Hello!!!',
        },
      },
    },
    Source: process.env.EMAIL_SENDER,
  };
  await ses.sendEmail(params).promise().then((response) => {
    console.log('Successfully sent email!');
  }, (error) => {
    console.log(error);
  });
};
