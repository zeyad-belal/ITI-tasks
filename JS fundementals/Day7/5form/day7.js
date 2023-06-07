var myForm = document.querySelector("form");
var nameField = document.getElementById("name");
var ageField = document.getElementById("age");
var emailField = document.getElementById("email");
var mySpans = document.querySelectorAll("span");
var tbody = document.getElementsByTagName("tbody")[0]

var nameIsValid;
var ageIsValid;
var emailIsValid;

nameField.addEventListener("input", (e) => {
  if (isFinite(e.target.value)) {
    e.target.style = "border : 1px solid red";
    mySpans[0].innerText = "name is not valid";

  } else if (e.target.value == "") {
    e.target.style = "border : 1px solid red";
    mySpans[0].innerText = "name is required";

  } else {
    e.target.style = "border : 1px solid black";
    mySpans[0].innerText = "";
    nameIsValid = true;
  }
});

ageField.addEventListener("input", (e) => {
  if (!isFinite(e.target.value)) {
    e.target.style = "border : 1px solid red";
    mySpans[1].innerText = "age is not valid";

  } else if (e.target.value == "") {
    e.target.style = "border : 1px solid red";
    mySpans[1].innerText = "age is required";

  } else {
    e.target.style = "border : 1px solid black";
    mySpans[1].innerText = "";
    ageIsValid = true;
  }
});

emailField.addEventListener("input", (e) => {
  var regEx = /^[^\s@]+@[^\s@]+\.[^\s]{2,}$/;

  if (!regEx.test(e.target.value)) {
    e.target.style = "border : 1px solid red";
    mySpans[2].innerText = "email is not valid";
  }else if (e.target.value == "") {
    e.target.style = "border : 1px solid red";
    mySpans[2].innerText = "email is required";
  } else {
    e.target.style = "border : 1px solid black";
    mySpans[2].innerText = "";
    emailIsValid =true;
  }
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formIsValid = nameIsValid && ageIsValid && emailIsValid
  if(formIsValid){
    tbody.innerHTML += "<tr><td>"+nameField.value+"</td> <td>"+ageField.value+"</td> <td>"+emailField.value+"</td></tr>"
  }
});
