///////////////////DATE//////////////////
var myDate = new Date(prompt("your data?"))

var months = ["sunday","monday","tueseday","wenasday","thursday","friday","saturday"]

alert(months[myDate.getDay()])

////////////////////

function check(birthDay){
  var birthDay = prompt("your birthday in dd-mm-yyyy")

  var status = birthDay.charAt(2) === "-" && birthDay.charAt(5) === "-"

  if(typeof birthDay == "string" && birthDay.length == 10 && status){

    var year = Number(birthDay.slice(6,10))
    var month = Number(birthDay.slice(3,5) -1)
    var day = Number(birthDay.slice(0,2))

    var theDate = new Date(year,month,day)
    alert(theDate)
  }else{
    alert("wrong date format")
  }
}
function showDate(){
  check()
}


////////////////////MATH//////////////////////////////

var circleRaduis = prompt("your circle radius")
var circleArea = Math.PI * Math.pow(circleRaduis , 2)
alert("the total area of the circle " + circleArea)

///////

var theValue = prompt("your value")

var valueSqua = Math.sqrt(theValue)

alert(valueSqua)

//////////////////////ARRAY//////////////////////////////

var jsFacts = [
  "JavaScript is a programming language used for creating interactive web pages and web applications",
  "It was created in 1995 by Brendan Eich.",
  "JavaScript is a client-side scripting language.",
  "It is used for adding dynamic and interactive elements to web pages.",
  "JavaScript is supported by all major web browsers.",
];

var randomTipNum = Math.floor(Math.random()* jsFacts.length)
var randomTip = jsFacts[randomTipNum]

alert(randomTip)

//////////////

let theValues = [];
for (let i = 0; i < 3; i++) {
  let value = prompt("value" + (i + 1) + ":");
  theValues.push(Number(value));
}

var theSum = eval(theValues.join("+"))
var theMulti = eval(theValues.join("*"))
var theDivi = eval(theValues.join("/"))

document.write("<h1>sum of the 3 values: " + theValues.join("+") + " = " + theSum +"</h1>")
document.write("<h1>multiplication of the 3 values: " + theValues.join("*") + " = " + theMulti+"</h1>")
document.write("<h1>division of the 3 values: " + theValues.join("/") + " = " + theDivi+"</h1>")


//////////////

function myNumbers(...nums){
  return nums.reverse()
}

console.log(myNumbers(1,2,3,4))





