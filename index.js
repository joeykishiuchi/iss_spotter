const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

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