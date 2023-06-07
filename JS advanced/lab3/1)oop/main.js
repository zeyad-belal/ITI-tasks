function Book(t,n,a){
    this.title = t,
    this.numOfChapters =n,
    this.author =a
};


function Box(arr,w,h){
  this.content= arr
  this.width = w,
  this.height = h

  // define getter but not setter for the content
  var arrayOfBooks = this.content;  // to dodge max call stack bug
  Object.defineProperty(this, "content",{
    get:function(){
      return arrayOfBooks
    },
    configurable:true,
    enumerable:true
  })

  this.numOfBooks = this.content.length

  this.deleteBook= function(title){
    var self =this;
    this.content = this.content.forEach(function(book, i) {
      if(book.title == title) {
        self.content.splice(i, 1);
        self.numOfBooks--
      }
  })
  }
};

var book1= new Book("title1", 7 , "shekspier")
var book2= new Book("title2", 10 , "andrew")
var book3= new Book("title3", 24 , "kolhm")
var book4= new Book("title4", 44 , "voller")
var arrOfBooks = [book1,book2,book3,book4]

var box1 = new Box(arrOfBooks,55,23)
var box2 = new Box(arrOfBooks,55,23)


Box.prototype.toString = function(){
  return "box height:" + this.height + ", box width:" + this.width + ", number of books :" + this.numOfBooks;
};


Box.prototype.valueOf = function(){
  return this.numOfBooks;
};

// box1.deleteBook("title1")
console.log(box1.numOfBooks)
console.log(box1)

console.log(box1.toString())
console.log(box1 + box2)


