// ===========================================
// Basic Promise Chain with .then(), .catch(), and .finally()
// ===========================================

Promise.resolve("Hello world")
  .then(() => {
    console.log("first then");
  })
  .then(() => {
    console.log("second then");
  })
  .then(() => {
    console.log("third then");
  })
  .catch((error) => {
    console.log("error:", error);
  })
  .finally(() => {
    console.log("finally");
  });

// ===========================================
// Throwing an Error in the Middle of the Chain
// ===========================================

Promise.resolve("Hello world")
  .then(() => {
    console.log("first then");
  })
  .then(() => {
    throw new Error("error from second then");
  })
  .then(() => {
    console.log("third then"); // Will not run
  })
  .catch((error) => {
    console.log("error:", error.message);
  })
  .finally(() => {
    console.log("finally");
  });

// ===========================================
// Catch, Then Throw Again (Finally still runs)
// ===========================================

Promise.resolve("Hello world")
  .catch((error) => {
    console.log("first error block:", error);
  })
  .then(() => {
    console.log("first then");
  })
  .then(() => {
    throw new Error("error from second then");
  })
  .catch((error) => {
    console.log("error:", error.message);
    throw new Error("error from catch");
  })
  .finally(() => {
    console.log("finally");
  });

// ===========================================
// Rejected Promise with Multiple Catch Blocks
// ===========================================

Promise.reject("Hello world")
  .catch((error) => {
    console.log("first error block:", error);
  })
  .then(() => {
    console.log("first then");
  })
  .then(() => {
    throw new Error("error from second then");
  })
  .catch((error) => {
    console.log("error:", error.message);
    throw new Error("error from catch");
  })
  .then(() => {
    console.log("third then"); // Will not run
  })
  .catch((error) => {
    console.log("error from catch block:", error.message);
  })
  .then(() => {
    console.log("fourth then"); // Will run
  })
  .finally(() => {
    console.log("finally");
  });

Promise.reject("Hello world")
  .catch((error) => {
    console.log("first error block", error);
  })
  .then(() => {
    console.log("first then");
  })
  .then(() => {
    throw new Error("error from second then");
  })
  .catch((error) => {
    console.log("error", error);
    throw new Error("error from catch"); // this throws error but finally() not catching errors so it will re-thrown after finally() executed
  })
  .then(() => {
    console.log("third then"); // this will not run
  })
  .catch((error) => {
    console.log("error from catch block", error);
  })
  .then(() => {
    console.log("fourth then"); // this will run
  })
  .finally(() => {
    console.log("finally");
  });

// ===========================================
// Handling Rejection in .then() (Second argument)
// ===========================================

Promise.reject("Oops")
  .then(
    () => {
      console.log("Success");
    },
    (err) => {
      console.log("Handled error in then:", err);
      return "Recovered";
    }
  )
  .then((value) => {
    console.log("Next then after recovery:", value);
  })
  .catch((err) => {
    console.log("Caught error in catch:", err); // Will not run
  })
  .finally(() => {
    console.log("Finally block");
  });

// ===========================================
// Catch + Recover with a New Promise
// ===========================================

Promise.reject("Something bad")
  .catch((err) => {
    console.log("Caught:", err);
    return Promise.resolve("hello");
  })
  .then((val) => {
    console.log("Continued with:", val);
  });

// ===========================================
// Returning Value vs. Ignored Promise Inside .then()
// ===========================================

/*
when you use .then(), no matter what you return (even undefined, null, or nothing at all), 
it always wraps the result in a Promise.
*/
Promise.resolve("hello")
  .then((val) => {
    console.log("Continued with:", val);
    Promise.resolve("Dharak..."); // Ignored, not returned
    return "how are you..."; // Passed to next .then
  })
  .then((val) => {
    console.log("Continued with:", val);
    Promise.resolve("from resolver"); // Ignored
    return "from return"; // Passed to next .then
  })
  .then((val) => {
    console.log("Continued with:", val);
  });
