
// /**
//  * output : [1,2,3]
//  */
// Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]).then((res) => {
//   console.log(res)
// }) 

// /**
//  * output :
//  * from all method 3
//  * [1,2,undefined]  cause we are not retuning any resolved value from then which creates new promise
//  */
// Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3).then((val)=>{console.log("from all method",val)})]).then((res) => {
//   console.log(res)
// }) 

// /**
//  * output :
//  * from all method 3
//  * [1,2,6]  cause we are retuning "6" resolved value from then which creates new promise
//  */
// Promise.all([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3).then((val)=>{console.log("from all method",val); return 6})]).then((res) => {
//   console.log(res)
// })


// Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("error", err)
// })

// /**
//  * output :
//  * from all method 3
//  * error 2
//  * 
//  * Promise.all() starts executing all promises immediately, in parallel.
//     It waits for all of them to settle.
//     If any promise rejects, the entire Promise.all rejects immediately with that error.
//     But all input promises still keep running.
//  */
// Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3).then((val)=>{console.log("from all method", val)})]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("error from reject:", err)
// })

// /**
//  * here you can see even if we can see log "from inside method"
//  *  Promise.all() reject for second promise , not for third cause it encountered first
//  * for proof we can store this in constant and then handle that with then-catch
//  */

// Promise.all([Promise.resolve(1),Promise.reject(2),Promise.reject("errro").catch((err)=>console.log("from inside method",err))]).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log("error from reject:", err)
// })

// const handlePromise = Promise.all([Promise.resolve(1),Promise.reject(2),Promise.reject("errro").catch((err)=>console.log("from inside method",err))]);
// handlePromise.then((res) => {
//   console.log("final res", res)
// }).catch((err) => {
//   console.log("final error", err)
// })