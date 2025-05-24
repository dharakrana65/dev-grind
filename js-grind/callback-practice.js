function greeting(name, cb) {
  console.log(`Hello ${name}`);
  cb(name);
}

function callbackFn(name) {
  console.log(`I am a callback function.I am here to Wellcomed you ${name}`);
}

// greeting("Dharak", callbackFn)

const Rows = [
  {
    id: 1,
    name: "Alice Anderson",
    email: "alice@example.com",
    age: 34,
    department: "Engineering",
    isActive: true,
  },
  {
    id: 2,
    name: "Raj Singh",
    email: "raj@company.com",
    age: 29,
    department: "Analytics",
    isActive: true,
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    email: "maria.g@latamtech.com",
    age: 42,
    department: "HR",
    isActive: false,
  },
  {
    id: 4,
    name: "Liam O'Connell",
    email: "liam@finance.org",
    age: 46,
    department: "Finance",
    isActive: true,
  },
  {
    id: 5,
    name: "Chen Li",
    email: "chen.li@pacific.cn",
    age: 31,
    department: "DevOps",
    isActive: true,
  },
  {
    id: 6,
    name: "James Carter",
    email: "j.carter@example.org",
    age: 38,
    department: "Product",
    isActive: false,
  },
  {
    id: 7,
    name: "Fatima Al-Farsi",
    email: "fatima@globalbiz.com",
    age: 27,
    department: "Marketing",
    isActive: true,
  },
  {
    id: 8,
    name: "Igor Petrov",
    email: "igor@datasci.ai",
    age: 35,
    department: "Analytics",
    isActive: true,
  },
  {
    id: 9,
    name: "Elena Popova",
    email: "elena@company.eu",
    age: 33,
    department: "Design",
    isActive: false,
  },
  {
    id: 10,
    name: "Jasper Lee",
    email: "jasper.lee@techcorp.net",
    age: 30,
    department: "Engineering",
    isActive: true,
  },
  {
    id: 11,
    name: "Nina Brown",
    email: "nina@creativehub.io",
    age: 41,
    department: "Design",
    isActive: true,
  },
  {
    id: 12,
    name: "Ahmed Khan",
    email: "ahmed.k@enterprise.org",
    age: 36,
    department: "Sales",
    isActive: false,
  },
  {
    id: 13,
    name: "Sophia Martinez",
    email: "sophia@latamcorp.com",
    age: 26,
    department: "HR",
    isActive: true,
  },
  {
    id: 14,
    name: "Tom Becker",
    email: "tom.b@startup.io",
    age: 40,
    department: "Engineering",
    isActive: true,
  },
  {
    id: 15,
    name: "Mina Okabe",
    email: "mina.okabe@tech.asia",
    age: 32,
    department: "Support",
    isActive: true,
  },
  {
    id: 16,
    name: "Diego Rivera",
    email: "diego.rivera@latamtech.com",
    age: 28,
    department: "Marketing",
    isActive: true,
  },
  {
    id: 17,
    name: "Hannah Müller",
    email: "hannah@eucom.de",
    age: 37,
    department: "Finance",
    isActive: false,
  },
  {
    id: 18,
    name: "Zainab Bako",
    email: "zainab.bako@africa-tech.com",
    age: 33,
    department: "Analytics",
    isActive: true,
  },
  {
    id: 19,
    name: "Luca Rossi",
    email: "l.rossi@europefirm.it",
    age: 45,
    department: "Operations",
    isActive: true,
  },
  {
    id: 20,
    name: "Emily Johnson",
    email: "emily@company.com",
    age: 24,
    department: "Support",
    isActive: true,
  },
];

function fetchFirstNRows(number, cb) {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let i = 0;

  const Loading = setInterval(() => {
    process.stdout.write(`\r${frames[i++ % frames.length]} Fetching data...`);
  }, 100);

  // Function to stop the loader
  const stopLoading = () => {
    clearInterval(Loading);
    process.stdout.write("\r✔ Fetching completed, here is your data\n");
  };
  // Simulate loading for 5 seconds
  setTimeout(stopLoading, 5000);
  const response = Rows.slice(0, number);
  setTimeout(() => {
    cb(response);
  }, 6000)
  ;
}


function filterByName(data,name) {
    const result = data.filter((row) => row.name.includes(name));
    process.stdout.write(`\r✔ Filtered data by name: ${name}\n`);
    console.log(result);
}

fetchFirstNRows(10, (data) => {
  filterByName(data, "Raj");
})