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


