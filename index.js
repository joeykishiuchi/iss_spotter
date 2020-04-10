const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

// fetchISSFlyOverTimes({ latitude: '49.27880', longitude: '-123.11390' }, (err, data) => {
//   if (err) {
//     console.log("It didn't work!" , err); 
//     return;
//   }
//   console.log('It worked! The times are: \n', data);
// });

// fetchCoordsByIP("70.36.48.221", (err, data) => {
//   if (err) {
//       console.log("It didn't work!" , err); 
//       return;
//     }
//     console.log('It worked! The coordinates are: ', data);
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });