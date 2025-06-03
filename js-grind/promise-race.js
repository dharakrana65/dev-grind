const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved")
    }, 1000)})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 reject")
    }, 100)})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolved")
    }, 500)})

const p4 = Promise.race([p1,p2,p3])
p4.then((value) => console.log(value)).catch((err) => console.log("error",err))

const p5 = Promise.all([])
p5.then((value) => console.log(value)).catch((err) => console.log("error", err))