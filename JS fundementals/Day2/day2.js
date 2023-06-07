//1
for(var i= 10 ; i <= 20 ; i+=2 ){
  console.log("item " + i)
}

//////////////////////////////////

//2
for(var i = 1 ; i<=9 ; i+=2){
  console.log(i)
}

///////////////////////////////////

//3
alert("Welcome to my site");
var userName = prompt("what is your name?");

document.write("hello " + userName);

///////////////////////////////////

//4
var sum = 0 ;
do{
var num = prompt("your value is: ")

if(isFinite(num)){
  sum += parseInt(num)
}

}while(!isFinite(num)||sum < 100)

alert("your sum is: " + sum)

////////////////////////////////////

//5
var userMessage = prompt("enter your message:");

for(var i = 1 ; i <= 6 ; i++ ){
  document.write("<h" + i + ">" + userMessage + "</h" + i + ">")
}

////////////////////////////////////

//6
do{
  var userName = prompt("what is your name ?")
}while(isFinite(userName))

do{
  var birthdayYear = prompt("what is your birthday year ?")
}while(!isFinite(birthdayYear))

document.write("<div>" +"<u>Name</u> :" + userName + "</div>")
document.write("<div>" +"<u>Birthday</u> :" + birthdayYear + "</div>" )
document.write("<div>" + "<u>age</u> :" +(2023 - birthdayYear) + "</div>")







