function Rectangle(w, h) {
  this.width = w,
    this.height = h,
    this.calcArea = function () {
      return this.width * this.height;
    },
    this.calcPerimeter = function () {
      return 2 * (this.width + this.height);
    },
    this.displayInfo = function () {
      document.write(
        "<div>width: " +
        this.width +
        " height: " +
        this.height +
        " area: " +
        this.calcArea() +
        " perimeter: " +
        this.calcPerimeter() +
        "</div>"
      );
    };
}

var rec1 = new Rectangle(5, 8);
rec1.displayInfo();
