function calculator(x,a,y) {
  switch (a) {
    case '+':
      return x+y;
      break;

    case '-':
      return x-y;
      break;

    case '*':
      return x*y;
      break;

    case '/':
      return x/y;
      break;

    default:
      return 'operation not handled';

  }

}

console.log(calculator(4, "+", 6)); // Doit afficher 10

console.log(calculator(4, "-", 6)); // Doit afficher -2

console.log(calculator(2, "*", 0)); // Doit afficher 0

console.log(calculator(12, "/", 0)); // Doit afDyficher Infinity
console.log(calculator(12, "m", 0)); // Default case
