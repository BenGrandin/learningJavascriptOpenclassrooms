hour = Number(prompt("Type hour :"));
 /*
 if (hour>24 || hour<0){
 stop event ??
console.log("Hour not include between 0 and 24")
}
*/
min = Number(prompt("Type min :"));
/*
if (min>60 || min<0){
stop event ??
console.log("Min not include between 0 and 24")
}
*/
sec = Number(prompt("Type sec :"));
/*
if (min>60 || min<0){
stop event ??
console.log("Min not include between 0 and 24")
}
*/

if (sec<59){ // Correction OpenClassroom /Github possibilité de verifier si les chiffres sont bon ici
  sec+=1;
  }

  else if (sec==59 && min<59){
      sec=00;
      min=min+1;
  }

  else if (sec==59 && min==59 && hour<23){
      sec=00;
      min=00;
      hour+=1;
  }
  else {
    sec=00;
    min=00;
    hour=00;
    console.log("Another begin,")
  }


console.log("Time is "+hour+"h "+min+"min "+sec+"sec");
