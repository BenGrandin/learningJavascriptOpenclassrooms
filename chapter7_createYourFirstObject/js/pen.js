var pen ={
  type:"ballpoint",
  color:"blue",
};
pen.brand="bic";

console.log("My pen is a "+pen.type+ " pen "+pen.brand+ " writing in "+pen.color);

pen.color=prompt("Wrtie the color u want my pen :"); // change the pen color

console.log("My pen is a "+pen.type+ " pen "+pen.brand+ " writing in "+pen.color);

pen.price=prompt("Wrtie the price of my pen :"); // add a "price" propriety to object "pen"

console.log("It costs "+pen.price+" bitcoins");

pen.describe = function(){
  var description = "My pen is a "+this.type+ " pen "+this.brand+ " writing in "+this.color;
  return description;
}; //doesn't work, see later
