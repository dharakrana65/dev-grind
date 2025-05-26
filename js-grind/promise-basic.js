function fetchUser() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() < 0.5;
        setTimeout(() => {
            if(isSuccess) resolve({ name: 'John' });

            reject(`404: Not Available`);
        }, 2000);
    });
}

function onFullFilled(user) {
    console.log(`User fetched: ${user.name}`);
}

function onRejected(err) {
    console.log(`Error: ${err}`);
}

// const sattledUserPromise = fetchUser().then(onFullFilled, onRejected);
// console.log(sattledUserPromise);

// try {
// fetchUser()
// .then(onFullFilled, onRejected)
// .catch(onRejected)
// .finally(() => {
//     console.log(`Promise settled`);
// });
// } catch (error) {
//     console.log(`Error: ${error}`);
// }

//=================================================================================================
// Promises are always asynchronous in their behavior, even if the computation inside them is synchronous.
// You cannot "turn them into" synchronous constructs.

const syncPromise = new Promise((resolve, reject) => {
    console.log(`inside executor`)
    resolve('Hello world');
    reject('Rejected');
});


syncPromise.then((result) => {
    console.log(`inside then`)
    console.log(result);
});

console.log(`before promise resolved`)
/* 
output : 
inside executor (executor is called immediately)
before promise resolved (run synchronously)
inside then
Hello world
*/ 
