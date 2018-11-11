var r = Number(prompt("Enter the radius of the circle:"));


// TODO : ajoutez ici la définition de l'objet cercle

var circle ={
  radius: r,

  perimeter: function(){
  return this.radius*2*Math.PI ;
},

  area: function(){
  return Math.PI*this.radius*this.radius ;
  },
}


console.log("Perimeter = " + circle.perimeter());
console.log("Area = " + circle.area());
