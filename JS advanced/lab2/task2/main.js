function Shape(w,h){
  if(this.constructor == Shape){
    throw("this is a abstract class")
  }
  this.width = w,
  this.height=h || w,
  this.calcArea = function () {
    return this.width * this.height;
  },
  this.calcPerimeter = function () {
    return 2 * (this.width + this.height);
  },
  this.displayInfo = function () {
    return(
      "<div>width: " +
        this.width +" height: " +this.height +" area: " +
        this.calcArea() +" perimeter: " +this.calcPerimeter() +"</div>"
        )
  }
};



function Rectangle(w, h) {
  Shape.call(this,w,h)
  if(this.constructor == Rectangle && (Rectangle.setCount()) == 2 ){
    throw("ONLY ON INSTANCE ALLOWED")
  } 
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; 


//counter
(function(){
  var count=0;
  Rectangle.getCount = function(){
    return count
  };
  Rectangle.setCount= function(){
    count++
    return count
  }
})();


var myrec = new Rectangle(5,6);
// var myrec2 = new Rectangle(5,6)
console.log(myrec.calcArea());



function Square(l){
  Rectangle.call(this,l)
  if(this.constructor == Square && (Square.setCount()) == 2 ){
    throw("ONLY ON INSTANCE ALLOWED")
  }
};

//counter
(function(){
  var count=0;
  Square.getCount = function(){
    return count
  };
  Square.setCount= function(){
    count++
    return count
  }
})();

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square; 



var mySquare = new Square(3,3);
// var mySquare2 = new Square(3,3)
console.log(mySquare.calcArea());






// overriding toString
// Rectangle.prototype.toString = function () {
//   return this.displayInfo();
// };



// console.log(Rectangle.getCount())