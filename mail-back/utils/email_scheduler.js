const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-2',
});

const ses = new AWS.SES();

exports.handler = async (event) => {
    // TODO: Get emails by calling the REST API
    const params = {
        Destination: {
            ToAddresses: ['JuanMBriones@outlook.com', 'finn.monteithbriones.17@gmail.com'],
        },
        Message: {
            Subject: {
                Data: 'Test Email'
            },
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `<h3>Hello there!</h3><br/>
                <br/>
                <img src='https://acegif.com/wp-content/gifs/hello-36.gif'"+
                "alt='Hi' style='width:380px;height:380px;'>
                `
              },
                Text: {
                    Data: 'Hello!!!',
                }
            }
        },
        Source: 'finn.monteithbriones.17@gmail.com'
    };
    await ses.sendEmail(params).promise().then(response => {
        console.log('Successfully sent email!');
    }, error => {
        console.log(error);
    });
};


