const employee = new Map();

employee.set('Veena_123@i.com', {
    firstname: 'Veena',
    lastName: 'Bhat',
    role:' UI developer'
});
employee.set("adiya32@i.com", {
  firstname: "Addya",
  lastName: "Kamath",
  role: " UX designer"
});

console.log(employee);
employee.has("Veena_123@i.com");

for(const employe of employee){
    console.log(employe);
}