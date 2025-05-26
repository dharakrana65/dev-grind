// Promise.resolve("Hello world")
// .then(()=> {
//     console.log("first then")
// })
// .then(()=> {
//     console.log("second then")
// })
// .then(()=> {
//     console.log("third then")
// })
// .catch((error)=> {
//     console.log("error", error)
// })
// .finally(()=> {
//     console.log("finally")
// })
// =======================================================================
// Promise.resolve("Hello world")
// .then(()=> {
//     console.log("first then")
// })
// .then(()=> {
//     throw new Error("error from second then")
// })
// .then(()=> {
//     console.log("third then") //this will not run
// })
// .catch((error)=> {
//     console.log("error", error)
// })
// .finally(()=> {
//     console.log("finally")
// })
// ===================================================================
// Promise.resolve("Hello world")
// .catch((error)=> {
//     console.log("first error block", error)
// })
// .then(()=> {
//     console.log("first then")
// })
// .then(()=> {
//     throw new Error("error from second then")
// })
// .catch((error)=> {
//     console.log("error", error)
//     throw new Error("error from catch") // this throws error but finally() not catching errors so it will re-thrown after finally() executed
// })
// .finally(()=> {
//     console.log("finally")
// })
// ======================================================================

// Promise.reject("Hello world")
// .catch((error)=> {
//     console.log("first error block", error)
// })
// .then(()=> {
//     console.log("first then")
// })
// .then(()=> {
//     throw new Error("error from second then")
// })
// .catch((error)=> {
//     console.log("error", error)
//     throw new Error("error from catch") // this throws error but finally() not catching errors so it will re-thrown after finally() executed
// })
// .then(()=> {
//     console.log("third then") // this will not run
// })
// .catch((error)=> {
//     console.log("error from catch block", error)
// })
// .then(()=> {
//     console.log("fourth then") // this will run
// })
// .finally(()=> {
//     console.log("finally")
// })
//================================================================

// Promise.reject("Oops")
//   .then(
//     () => console.log("Success"),
//     (err) => {
//       console.log("Handled error in then:", err);
//       return "Recovered";
//     }
//   )
//   .then((value) => {
//     console.log("Next then after recovery:", value);
//   })
//   .catch((err) => {
//     console.log("Caught error in catch:", err); //will not run caue error handled by first then
//   })
//   .finally(() => {
//     console.log("Finally block");
//   });


  Promise.reject("Something bad")
  .catch((err) => {
    console.log("Caught:", err);
    return Promise.resolve("hello");
  })
  .then((val) => {
    console.log("Continued with:", val);
  });
