word=prompt("Type the word u want to convert :" )
console.log(word);

for (i=0;i<word.length;i++){ // Can be done by using two function, 
                            // one convert letter, the other read letter by letter the word
  switch (word[i]) {
    case 'a':
      word[i]=4 ;
      break;

    case 'b':
      word[i]=8 ;
      break;


    case 'e':
      word[i]=3 ;
      break;

    case 'l':
      word[i]=1;
      break;

    case 'o':
      word[i]=0 ;
      break;

    case 's':
      word[i]=5 ;
      break;
    }
  console.log(word[i]);
  console.log(i);

  
}

console.log(word);
