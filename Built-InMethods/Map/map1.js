const courses = new Map();

courses.set('Angular', 1001);
courses.set("Java", 1002);
courses.set("JavaScript", 1003);
courses.set("Vue", 1004);
courses.set("Babal", 1005);
courses.set("React", 1006);
courses.set("Springboot", 1007);

// Output will be only Key and Value

for (const course of courses){
    var [key, value] = course;
    // console.log(key, value);
}

// ForEach loop
courses.forEach((value, key) => console.log(key, value))