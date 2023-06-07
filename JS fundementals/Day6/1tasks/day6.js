// ///////////EVENTS//////////////////////////
// var mybutton = document.createElement("button")
// mybutton.innerText = "show date"
// mybutton.setAttribute("onClick" , "clickHandler()")
// document.body.prepend(mybutton)

// var myDate = new Date().toLocaleDateString()

// function clickHandler(){
//   var theDate = document.createElement("div")
//   theDate.innerText = myDate
//   document.body.prepend(theDate)
// }

// /////////////////

// var mybutton = document.createElement("button")
// mybutton.innerText = "click me"
// mybutton.setAttribute("onClick" , "clickHandler()")

// document.body.prepend(mybutton)

// function clickHandler(){
//   var userInput = prompt("enter a math experssion")
//   if(isFinite(eval(userInput))){
//     var res = eval(userInput)
//   }else{
//     alert("only nums")
//   }
//   alert("you entered: " + userInput +", and the result is: " + res)
// }

// //////////////////////DOM////////////////////////////////
// do{
//   var numOfPersons = prompt("enter the no of persons")
// }while(!numOfPersons || !isFinite(numOfPersons))

// var myTable = document.createElement("table");
// myTable.innerHTML = "<thead><th>Name</th> <th>Age</th></thead> <tb></tb>";
// myTable.getElementsByTagName("th").style = " border: 1px solid;";
// myTable.getElementsByTagName("th")[0].style="width : 70%"
// myTable.getElementsByTagName("td").style = " border: 1px solid;";
// myTable.style = " border: 1px solid;";

// var tableBody = myTable.getElementsByTagName("tb")[0]

// document.body.prepend(myTable)

// var names =[];
// var ages =[];

// for(var i = 1 ; i <= numOfPersons ; i++){

//   do{
//     var userName =prompt("enter user"+i+" name") 
//   }while(userName.length < 3 || userName.length > 10)

//   names.push(userName)
  
//   do{
//     var userAge = prompt("enter user"+i+" age") 
//   }while(userAge < 10 || userName > 60)

//   ages.push(userAge) 

// }

// for(var i =0 ; i < names.length ; i++){
//   myTable.innerHTML += "<tr><td>"+ names[i] +"</td> <td>"+ ages[i] +"</td></tr>" 
// }

// ////////////////////////

// var hexaDigits = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// var myDiv = document.createElement("div")
// myDiv.append(document.createTextNode("#FFFFFF"))

// myDiv.style = "padding : 50px ; border : 1px solid black; display : inline-block;"

// function cloneMe(){
//   //random color 
//   var randomColor =[]
//   for(let i=0 ; i<6 ; i++){
//     randomColor.push((hexaDigits[Math.floor(Math.random()*hexaDigits.length)]))
//   }
//   var finalColor ="#"+ randomColor.join("")

//   //cloning
//   var divClone = myDiv.cloneNode(false)
//   divClone.style.backgroundColor = finalColor

//   divClone.append(document.createTextNode(finalColor))

//   document.body.append(divClone)
// }

// myDiv.setAttribute("onClick" , "cloneMe()")

// document.body.prepend(myDiv)

// ////////////////////////////////