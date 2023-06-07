import {Shape , Rectangle ,Square , Circule } from "./classes.js";
// import * as obj from "./classes.js";
// console.log(obj)

let myShape = new Shape(5)
let myRec = new Rectangle(5,6)
let myCir = new Circule(5)
let mySquare = new Square(5)

console.log(myShape.length)
console.log(myRec.calcArea())
console.log(myCir.calcArea())
console.log(mySquare.calcArea())

myRec.toString()
myCir.toString()
mySquare.toString()