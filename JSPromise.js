
const mainPromise = new Promise(function (resolve, reject) {

    let finalresult = true; // Moved inside the main promise

    const subPromiseOne = new Promise(function (resolve, reject) {
        let error = true;
        reject(error);
    })

    subPromiseOne.catch(function () {
        finalresult = false;
        console.log('Promise 1 rejected');
        reject("Error Occurred in subPromise1 and hence MainPromise rejected."); // Reject mainPromise here
    })

    const subPromiseTwo = new Promise(function (resolve, reject) {
        let result = true;
        resolve(result);
    })

    subPromiseTwo.then(function () {
        console.log('Promise2 fulfilled.');
    }).catch(function () {
        finalresult = false;
    })


    const subPromiseThree = new Promise(function (resolve, reject) {
        let result = true;
        resolve(result);
    })

    subPromiseThree.then(function () {
        console.log('Promise3 fulfilled.');
        if (finalresult) { // Checking here the result for mainPromise
            resolve("Main Promise Fulfilled"); // Resolve mainPromise here
        } else {
            reject("Main Promise rejected as one of the sub promises was rejected."); // Reject mainPromise here
        }
    }).catch(function () {
        finalresult = false;
    })
})

mainPromise.then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.log(response);
}).finally(()=> {console.log('Main Promise either got resolved or rejected. Closing the promise')})


