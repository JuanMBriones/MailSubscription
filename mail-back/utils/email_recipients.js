const https = require('https');

const options = {
  protocol: 'https:',
  hostname: 'mail-sender-back.herokuapp.com',
  path: '/api/users/',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Do a request with options provided.
 *
 * @param {Object} options
 * @param {Object} data
 * @return {Promise} a promise of request
 */
function doRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(responseBody));
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.end();
  });
}

const getRecipients = async () => {
  const response = await doRequest(options);
  return response;
};

module.exports = {
  getRecipients,
};
