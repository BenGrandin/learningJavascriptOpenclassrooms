string=prompt("type a string");

function reverse(string){
  reversedString = "" ;             // we define an empy string
  for(i=string.length-1;i>=0;i--){    // starting by the last character of the str we want backward
    reversedString=reversedString + string[i] ; // we incremenent the empty string letter by letter
  }
  return reversedString ;
}

console.log(reverse(string)) ;
