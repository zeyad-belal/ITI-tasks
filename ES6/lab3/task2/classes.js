export class Shape{
  constructor(l){
    this.length = l 
  }
  toString(){
    console.log(`Area: ${this.calcArea()} .. Perimeter: ${this.calcPerimeter()}`)
  }
}

export class Rectangle extends Shape{
  constructor(l,w){
    super(l)
    this.width = w
  }
  calcArea(){
    return (this.length * this.width)
  }
  calcPerimeter(){
    return (2 * (this.length + this.width))
  }

}

export class Square extends Shape{
  constructor(l){
    super(l)
  }
  calcArea(){
    return (this.length * this.length)
  }
  calcPerimeter(){
    return (this.length * 4)
  }
} 

export class Circule extends Shape{
  constructor(l){
    super(l)
  }
  calcArea(){
    return (Math.PI * Math.pow(this.length,2))
  }
  calcPerimeter(){
    return (2 * Math.PI * this.length)
  }
}

