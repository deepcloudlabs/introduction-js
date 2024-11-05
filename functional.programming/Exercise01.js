let employees = [
    {fullname: "jack bauer", salary: 100_000, iban: "tr1", departments: ["IT", "SALES"], fulltime: true},
    {fullname: "kate austen", salary: 200_000, iban: "tr2", departments: ["HR", "FINANCE"], fulltime: false},
    {fullname: "james sawyer", salary: 300_000, iban: "tr3", departments: ["SALES"], fulltime: true},
    {fullname: "jin kwon", salary: 400_000, iban: "tr4", departments: ["IT", "FINANCE"], fulltime: false},
    {fullname: "sun kwon", salary: 500_000, iban: "tr5", departments: ["IT", "HR"], fulltime: true}
]
// imperative programming
let total_it_salary = 0;
for (const employee of employees) {
    if (employee.departments.includes("IT")) {
        total_it_salary += employee.salary;
    }
}
console.log(`total salary for IT department is ${total_it_salary}`);
// declarative programming: functional programming
// Higher-Order Function: filter, map, reduce, ...
function it_worker(employee){
    return employee.departments.includes("IT");
}
function print_employee(employee){
    console.log(employee)
}
function toSalary(employee){
    return employee.salary;
}
function print_salary(salary){
    console.log(salary);
}
function sum(x,y){
    return x+y;
}

employees.filter(it_worker)       // HoF
         .forEach(print_employee) // HoF
total_it_salary = // chain of HoFs
employees.filter(it_worker)       // HoF
         .map(toSalary)           // HoF
         .reduce(sum,0)           // HoF
console.log(`total salary for IT department is ${total_it_salary}`);

// Pure Function: lambda/arrow function
total_it_salary = // chain of HoFs
      employees.filter( emp => emp.departments.includes("IT"))       // HoF
               .map(e => e.salary)           // HoF
               .reduce((x,y)=>x+y,0)           // HoF
console.log(`total salary for IT department is ${total_it_salary}`);
