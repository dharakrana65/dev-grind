// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
// console.log(p);

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }


/**
 * Promise.all resolves synchronously if and only if the iterable passed is empty
 */

const p2 = Promise.all([]);
console.log(p2);