function sayHi(name) { // definition of the function
  message=("Hi "+name+" !");
  return message
}

console.log("Program start !");

name=prompt("Type your name");
console.log(sayHi(name)); // call of the function
// var a = sayHi() ;

console.log("Program end !");
