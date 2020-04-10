const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(IpData) {
  IP = JSON.parse(IpData).ip;
  return request(`ipvigilante.com/${IP}`);
};

const fetchISSFlyOverTimes = function(coordsa) {
  const { latitude, longitude } = JSON.parse.coords;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
  });
};



module.exports = { nextISSTimesForMyLocation};