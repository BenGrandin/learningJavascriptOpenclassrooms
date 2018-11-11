// calculates the circumference of a circle

function circumference(x){
  x=x*2*Math.PI;
  return x;
}

function area(x){
  x=Math.PI*x*x;
  return x;
}

var r=prompt("Type the radius of your circle");

console.log("The circumference of your circle is "+circumference(r));
console.log("The area of your circle is "+area(r));
