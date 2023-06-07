var myForm = document.getElementsByTagName("form")[0]
var userName = document.getElementsByTagName("input")[0]
var password = document.getElementsByTagName("input")[1]
var rememberMe = document.getElementsByTagName("input")[2]
var logBtn = document.getElementsByTagName("button")[0]
var welcomeMess = document.getElementById("welcome")

window.onload = function (){
  if(localStorage.name && localStorage.password){
    myForm.style.display = "none"
    welcomeMess.style.display = "block"
    welcomeMess.innerText = "welcome " + localStorage.getItem("name")
  }
}

logBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  if(rememberMe.checked){
    localStorage.setItem("name" , userName.value)
    localStorage.setItem("password" , password.value)
    myForm.style.display = "none"
    welcomeMess.style.display = "block"
    welcomeMess.innerText = "welcome " + userName.value
  }else{
    myForm.style.display = "none"
    welcomeMess.style.display = "block"
    welcomeMess.innerText = "welcome " + userName.value
  }


})

