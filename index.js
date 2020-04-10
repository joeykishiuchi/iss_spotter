const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , err);
    return;
  } else {
    for (const times of passTimes) {
      const day = new Date(times.risetime).toDateString();
      const time = new Date(times.risetime).toTimeString()
      console.log(`Next Pass at ${day} ${time} for ${times.duration} seconds!`);
    }
  }
});




// let date = new Date(1586481148).toTimeString();
// console.log(date)

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