function Rectangle(w, h) {
    Rectangle.setCount(); 
    this.width = w,
    this.height = h,
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

Rectangle.prototype.toString = function () {
  return this.displayInfo();
};

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

var rec1 = new Rectangle(5, 8);
var rec2 = new Rectangle(5, 8);
var rec3 = new Rectangle(5, 8);
console.log(Rectangle.getCount())

//document.write untomatically calls to string which we have overiden
document.write(rec1);

