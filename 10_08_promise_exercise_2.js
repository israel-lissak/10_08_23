function multiply3Numbers(num1, num2, num3) {
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(num1 *= 2)}, 1000)
    })
    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(num2 *= 2)}, 1000)
    })
    const prom3 = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(num3 *= 2)}, 1000)
    })

    return [prom1, prom2, prom3]
}

Promise.all(multiply3Numbers(1,2,3))
.then(resolve => console.log(resolve))

function processNumbersWithPromises(numbers) {
    const promises = numbers.map(value => {
      if (value < 0) {
        return Promise.reject(new Error("Negative value encountered"));
      }
      return Promise.resolve(value * 2);
    });
  
    return Promise.allSettled(promises)
      .then(results => {
        const fulfilledCount = results.filter(result => result.status === 'fulfilled').length;
        const rejectedCount = results.filter(result => result.status === 'rejected').length;
  
        return { fulfilledCount, rejectedCount };
      });
  }
  
  const inputNumbers = [1, 2, -3, 4, 5, -6,6,6,6,6,6];
  processNumbersWithPromises(inputNumbers)
    .then(result => {
      console.log("Fulfilled promises:", result.fulfilledCount);
      console.log("Rejected promises:", result.rejectedCount);
    })
    .catch(error => {
      console.error("An error occurred:", error.message);
    });