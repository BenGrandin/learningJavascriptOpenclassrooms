var day = prompt("What is day is today?");

switch (day) {
  case "monday" && "Monday": // Why it doesn"t work with ||(or)
    console.log("Tomorrow, we'll be Tuesday");
    break;

  case "tuesday" && "Tuesday":
    console.log("Tomorrow, we'll be Wednesday");

  case "wednesday" && "Wednesday":
    console.log("Tomorrow, we'll be Thursday");

  case "thursday" && "Thursday":
    console.log("Tomorrow, we'll be Friday");

  case "friday" && "Friday":
    console.log("Tomorrow, we'll be Saturday");

  case "saturday" && "Saturday":
    console.log("Tomorrow, we'll be Sunday");

  case "sunday" && "Sunday":
    console.log("Tomorrow, we'll be Monday");

  default:
  console.log("Next time, respect the case or type it correctly")

}
