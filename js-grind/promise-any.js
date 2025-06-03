// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// Expected output: "quick"


// const p = Promise.any([]);
// p.then((value) => console.log(value));

// const p2 = Promise.any([Promise.reject(1),Promise.reject(2)])
// p2.then((value) => console.log("from then",value)).catch((err) => console.log("from catch",err))