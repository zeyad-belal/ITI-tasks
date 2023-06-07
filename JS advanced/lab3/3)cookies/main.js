function setCookie(cookieName,cookieValue,expireDate){
  if(typeof cookieName != "string" ||typeof cookieValue != "string" ||typeof expireDate != "string"){
    throw("string values only")
  }
  document.cookie = cookieName + "=" + cookieValue +";" + "expires="+ new Date(expireDate) +";"
}

// setCookie("user" , "zeyad" , "7/7/2023")


function getCookie(k){
  if(!k){
    throw("must provide key")
  }
  if(typeof k != "string"){
    throw("string values only")
  }
  var res = "not found"
  var arr = document.cookie.split(";");
  for(var i=0 ; i < arr.length ; i++){
    var key = arr[i].split('=')[0]
    if(key.trim() === k){
      res = arr[i].split('=')[1]
    }    
  }
  return res
}

// console.log(getCookie("user"))


function deleteCookie(k){
  if(typeof k != "string"){
    throw("string values only")
  }
  var expirationDate = new Date('1/1/2023')
  document.cookie = k+"=ggg;expires="+ expirationDate
}

// deleteCookie("age")


function allCookieList(){
  var arr = document.cookie.split(";");
  var arrOfCookies =[]
  for(var i=0 ; i < arr.length ; i++){
    var key = arr[i].split('=')[0].trim() ;
    var value =arr[i].split('=')[1] ;
    var cookieObj = {};
    cookieObj[key] = value;
    arrOfCookies.push(cookieObj);
  }
  return arrOfCookies
}

// console.log(allCookieList())


function hasCookie(cookieName){
  if(typeof cookieName != "string"){
    throw("string values only")
  }
  var res = getCookie(cookieName)
  if (res == "not found"){
    return false
  }else{
    return true
  }
}

// console.log(hasCookie("aa"))

//////////

var nameInput = document.getElementById("name")
var ageInput = document.getElementById("age")
var genderInput = document.getElementsByClassName("gender")
var theGender;
var color = document.getElementById("color");

var registbtn = document.getElementById("register");
var myForm = document.getElementById("form")

for(var i = 0 ; i< genderInput.length; i++){
  genderInput[i].addEventListener("change", (e)=>{
    if(genderInput[0].checked){
      theGender = "m"
    }
    if(genderInput[1].checked){
      theGender = "f"
    }
  })
}

var userName;
nameInput.addEventListener("input", (e) => {
  userName = e.target.value;
});

var userAge;
ageInput.addEventListener("input", (e) => {
  userAge = e.target.value;
});

var userColor;
color.addEventListener("input", (e) => {
  userColor = e.target.value;
});

myForm.addEventListener("submit", function(e){
  if(!(nameInput && userAge && userColor && theGender)){
    e.preventDefault()
    
  }else{
    setCookie("name" , userName , "1/1/2099")
    setCookie("age" , userAge , "1/1/2099")
    setCookie("gender" , theGender , "1/1/2099")
    setCookie("color" , userColor , "1/1/2099")
    setCookie("visitCount", "0", "1/1/2099")
  }
})
// prevent back button
if(Number(getCookie("visitCount"))){
  location.replace("./index2.html")
  
}

