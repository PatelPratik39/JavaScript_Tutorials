/*
Without using SET() - Array does not check any repeated elements in an array
*/
let course = ['Angular','React', 'Vue'];
course.push('Angular');
console.log(course);
// Output will be [ 'Angular', 'React', 'Vue', 'Angular' ]

/*  
    with using SET() = Array ensures the distinct Values
*/

var courses = new Set();
console.log(courses);
// Output will be ; Set(0) {}

// lets create a list of values
let coursess = new Set(["Angular", "React",'Vue', "Vue",'Vite', "JavaScript"]);
console.log(coursess);
// output will be : Set(5) { 'Angular', 'React', 'Vue', 'Vite', 'JavaScript' }