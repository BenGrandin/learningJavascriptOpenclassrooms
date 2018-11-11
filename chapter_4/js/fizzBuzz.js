console.log("Program start !");

for(i=1;i<101;i++){               // loop from 1 to 100

  switch (true) {                 // Using switch in order to keep simple and a bit flexible

    case i%5==0 && i%3==0 :       // Number is divsible by 3 and 5
                                  // Have to start by this one (or it don't appear)
      console.log("FizzBuzz");
      break;

    case i%3==0:                  // Number is divsible by 3
      console.log("Fizz");
        break;
    case i%5==0:                 // Number is divsible by 5
      console.log("Buzz");
      break;

    default:                    // Number is not divisible by 3 or 5
      console.log(i);
      break;

  }
}

console.log("Program stop !");
