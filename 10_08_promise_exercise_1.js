// תרגיל 1
function promiseFun() {
  const promise1 = new Promise((resolve,reject) => {
    resolve('Success!');
  })
  promise1.then(resolve => console.log(resolve));
}

// // תרגיל 2
function fullName(firstName, lastName) {
  const first = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(firstName)
    },1000)
  })

  const last = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(lastName)
    },1000)
  })

  const full = Promise.all([first, last])
  .then((full) => console.log(full[0], full[1]))
}

// // תרגיל 3
function multiplyByTwo(num) {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  })
}
function addFive(num) {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(num + 5);
    }, 500);
  })
}
function subtractTen(num) {
  return new Promise(resolve =>{
    setTimeout(() => {
      resolve(num - 10);
    }, 500);
  })
}

addFive(10)
.then(multiplyByTwo)
.then(subtractTen)
.then(result => {
  console.log(result);
});

// // תרגיל 4
function divide(num1, num2) {
    return new Promise((resolve, reject) => {
      if (num2 === 0){
        reject(new Error("can't divide by 0"))
      } else {
        setTimeout(() => {
          resolve(num1 / num2);
        }, 500)
      }
    })    
}

// divide(12, 3)
// .then(result => console.log(result))
// .catch(err => console.log(err))

// תרגיל 5
async function fullNameAsync(firstName, lastName) {
  const first = await new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(firstName)
    },1000)
  })

  const last = await new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(lastName)
    },1000)
  })

  const full = first + ' ' + last;
  console.log(full); 
}

// תרגיל 6
async function divideAsync(num1, num2) {
  const divide = await new Promise((resolve, reject) => {
    if (num2 === 0){
      reject(new Error("can't divide by 0"))
    } else {
      setTimeout(() => {
        resolve(num1 / num2);
      }, 500)
    }
  })    
  console.log(divide);
}

