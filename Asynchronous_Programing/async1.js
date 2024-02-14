console.log("Before For loop execution");
for (var i = 0; i < 3; i++) {
  console.log("setTimeout message");
  func1();
  func2();
}
console.log("After For loop execution");
function func1() {
  console.log("Am in func1");
}
function func2() {
  console.log("Am in func2");
}
