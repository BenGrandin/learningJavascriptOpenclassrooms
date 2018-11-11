word=prompt("Type the word u want to convert :" )

for (i=0;i<word.length;i++){ // Can be done by using two function, one convert letter, the other read letter by letter the word
  switch (word[i]) {
    case word[i]=='a':
      word[i]=4 ;

    case 'b':
      word[i]=8 ;

    case 'e':
      word[i]=3 ;

    case 'l':
      word[i]=1 ;

    case 'o':
      word[i]=0 ;

    case 's':
      word[i]=5 ;
  }
}

console.log(word);
