/*
We can use add() and remove() to add more elements and remove more elemnts from a set
*/

// lets create a list of values
let coursess = new Set(["Angular", "React",'Vue', "Vue",'Vite', "JavaScript"]);
console.log(coursess);
coursess.add('Express');
console.log(coursess);
coursess.add('Node');
console.log(coursess);

coursess.delete('Vue');
console.log(coursess);

// Output will be : ç