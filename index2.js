 const { nextISSTimesForMyLocation } = require('./iss_promised');

 nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  printPassTimes(passTimes) {
    for (const times of passTimes) {
      const day = new Date(times.risetime).toDateString();
      const time = new Date(times.risetime).toTimeString()
      console.log(`Next Pass at ${day} ${time} for ${times.duration} seconds!`);
    }
  }
 
 