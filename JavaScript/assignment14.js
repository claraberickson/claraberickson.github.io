//Problem 1
const employees = [
  {
  firstName: "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raiseEligible: true,
},
{
  firstName: "Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raiseEligible: true,
},
{
  firstName: "Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raiseEligible: false,
},
];
console.log("Problem 1", employees);

//Problem 2
const company = {
  companyName:"Tech Stars",
  website:"www.techstars.site",
  employees: employees,
};
console.log("Problem 2", company);

//Problem 3
function addEmployee(firstName, departnment, designation, salary, raiseEligible) {
  const newEmployee = {firstName, department, designation, salary, raiseEligible}
  employees.push(newEmployee);
}
addEmployee("Anna","Tech","Executive",25600,false);

console.log("Problem 3", employee);

//Problem 4
let totalSalary = 0;
for (const id in employees) {
  totalSalary += employees[id].salary;
}
console.log("Problem 4", totalSalary);

//Problem 5
for (const id in employees) {
  if (employees[id].raiseEligible){
  employees[id].salary *= 1.1;
  employees[id].raiseEligible = false;
  }
}
console.log("Problem 5", employees);

//Problem 6
const employeesWorkingFromHome = ["Anna","Sam"];
for (const id in employees) {
  employees[id].wfh = employeesWorkingFromHome.includes(employees[id].firstName);
}
console.log("Problem 6", employees);
