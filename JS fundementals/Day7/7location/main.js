var myForm = document.querySelector("form");
var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var mobileField = document.getElementById("mobile");
var genderField = document.getElementById("gender");
var addressField = document.getElementById("address");

var userName;
nameField.addEventListener("input", (e) => {
  userName = e.target.value;
});

var userEmail;
emailField.addEventListener("input", (e) => {
  userEmail = e.target.value;
});

var userMobile;
mobileField.addEventListener("input", (e) => {
  userMobile = e.target.value;
});

var userGender;
genderField.addEventListener("input", (e) => {
  userGender = e.target.value;
});

var userAddress;
addressField.addEventListener("input", (e) => {
  userAddress = e.target.value;
});



myForm.addEventListener("submit", (e) => {
  if (!(userName && userEmail && userMobile && userGender && userAddress)) {
    e.preventDefault();
  }else{
    location.href = "welcome.html";
  }
});



var myTimeOut = setTimeout(() => {
  myForm.innerHTML = "time out";
}, 30000);

