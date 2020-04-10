const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (err, resp, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (resp.statusCode !== 200) {
      const msg = `Status Code ${resp.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const address = JSON.parse(body);
    callback(err, address['ip']);
  });
};

module.exports = fetchMyIP;