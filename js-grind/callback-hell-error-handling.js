function logIn(user, cb) {
  console.log(`Verifying email: ${user.email}`);
  setTimeout(() => {
    if (!user.email.includes("@")) {
      return cb("Invalid email", null); // simulate error

    }
    console.log(`Welcome, ${user.firstname}`);
    cb(null, user);
  }, 1000);
}

function getDetails(user, cb) {
  console.log("Fetching user details...");
  setTimeout(() => {
    if (!user.firstname || !user.lastname) {
      cb("User data incomplete", null); // simulate error
      return;
    }
    console.log(`First Name: ${user.firstname}`);
    console.log(`Last Name: ${user.lastname}`);
    cb(null, user.OrderId);
  }, 1000);
}

function getMyOrders(id, cb) {
  console.log(`Fetching order for ID: ${id}`);
  setTimeout(() => {
    if (typeof id !== "number") {
      return cb("Invalid order ID", null); // simulate error
    }
    console.log("Order found: MacBook Pro");
    cb(null, ["MacBook Pro", "USB-C Adapter"]);
  }, 1000);
}

const user = {
  firstname: "Dharak",
  lastname: "Rana",
  email: "dharakrana65gmail.com",
  OrderId: 123,
};

logIn(user,(err,userData) => {
    if(err) {
        console.log(`${err}`)
        return;
    }

    getDetails(userData,(err, details) => {
        if(err) {
            console.log(`${err}`)
            return;
        }

        getMyOrders(details,(err, orders) => {
            if(err) {
                console.log(`${err}`)
                return;
            }
            console.log(orders);
        })
    })
})
