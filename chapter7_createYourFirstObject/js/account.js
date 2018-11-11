var account={
  owner:"Ben",
  balance:0,

  credit: function(x){
    this.balance+=x ;
    },

  debit: function (x) {
    this.balance-=x ;
  },

  describe: function () {
    description ="Owner : "+this.owner+"\nBalance : "+this.balance+ " bitcoins" ;
    return description ;
  },
}

console.log(account.describe()) ;

x = Number(prompt("Type how much u credit :"));
account.credit(x);

y = Number(prompt("Type how much u debit :"));
account.debit(y);
console.log(account.describe()) ;
