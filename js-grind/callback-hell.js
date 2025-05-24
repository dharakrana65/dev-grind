function logIn(user,cb) {
    console.log(`varifiying you mail ${user.email}`)
    setTimeout(() => {
        console.log(`Welcome ${user.firstname}`);
      cb(user);
    }, 3000);
}

function getDetails(user, cb) {
    console.log(`Fetching Your Details`);
  setTimeout(() => {
    console.log(`First Name : ${user.firstname}`);
    console.log(`Last Name : ${user.lastname}`);
    cb(user.OrderId);
  }, 3000);
}

function getMyOrders(id, cb) {
      console.log(`Fetching Your Order by ID : ${id}`);
  setTimeout(() => {
    cb();
  }, 3000);
}


const user = {
  firstname: "Dharak",
  lastname: "Rana",
  email: "dharakrana65@gmail.com",
  OrderId: 123,
};

logIn(user,(user) => {
    getDetails(user, (id) => {
        getMyOrders(id, () => {
            console.log("All Done");
        })
    })
})
