/////////////////1/////////////////
var xhrUser1 = new XMLHttpRequest()
xhrUser1.open("get" , "https://reqres.in/api/users/1")
xhrUser1.send()
xhrUser1.addEventListener("readystatechange" , function(e){
  if(xhrUser1.status == 200 && xhrUser1.readyState == 4){
    var response = JSON.parse(xhrUser1.response)
    var firstName = response.data['first_name']
    var lastName = response.data['last_name'] 
    var avatar = response.data['avatar'] 

    var myDiv = document.createElement("div")
    myDiv.innerHTML = "<p>"+ firstName +" "+ lastName +  "</p>" + "<img src='" +avatar+"'>" 
    document.body.prepend(myDiv)
    
  }
});
///////////////////2/////////////////

var myBtn = document.getElementsByTagName("button")[0]
var myInput = document.getElementsByTagName("input")[0]

console.log(myBtn)
console.log(myInput)

var xhrUser2 = new XMLHttpRequest()
xhrUser2.open("get" , "https://reqres.in/api/users/ ")
xhrUser2.send()

xhrUser2.addEventListener("readystatechange" , function(e){
  if(xhrUser2.status == 200 && xhrUser2.readyState == 4){
    var response = JSON.parse(xhrUser2.response)
    var dataObj = response.data
    }
    var inputOutput= document.getElementById("inputOutput");
    var Udiv = document.createElement("div")
    inputOutput.append(Udiv)
    

  myBtn.addEventListener("click", function(e){
    e.preventDefault()
    dataObj.forEach(obj => {
      if(obj.id == myInput.value){
        Udiv.innerHTML = "<p>"+ obj['first_name'] +" "+
        obj['last_name'] +  "</p>" + "<img src='" +obj['avatar'] +"'>" 
      }
    });
    
  })
});

//////////////////////3///////////////////

var myList = document.getElementsByTagName("select")[0];


var xhrUser3 = new XMLHttpRequest()
xhrUser3.open("get" , "https://reqres.in/api/users/ ")
xhrUser3.send()

xhrUser3.addEventListener("readystatechange" , function(e){
  if(xhrUser3.status == 200 && xhrUser3.readyState == 4){

      var response = JSON.parse(xhrUser3.response)
      var dataObj = response.data

      dataObj.forEach((obj)=>{
        var option = document.createElement("option")
        option.setAttribute("value", obj['first_name'])
        option.innerText = obj['first_name']
        myList.append(option)
      })

      var choosenUser = document.createElement("div")
      document.body.append(choosenUser)

      myList.addEventListener("change", (e)=>{
        dataObj.forEach((obj)=>{
          if(myList.value == obj['first_name']){
            choosenUser.innerHTML = "<p>"+ obj['first_name'] +" "+
            obj['last_name'] +  "</p>" + "<img src='" +obj['avatar'] +"'>" 
          }
        })
      })

  }

});