const employees = [
  { id: 1, name: "Vaibhav", salary: 20000 },
  { id: 2, name: "Gauri", salary: 35000 },
  { id: 3, name: "Aditya", salary: 18000 },
  { id: 4, name: "Abhishek", salary: 40000 }
];

const matchingIds = employees
  .filter(e => e.salary > 25000)
  .map(e => e.id);

const result = matchingIds.map(id => employees.find(e => e.id === id));

console.log(result);


// HOW TO RUN THIS APPLICATION:
// Step 1: Open terminal inside this folder
// Step 2: Run → node app.js
