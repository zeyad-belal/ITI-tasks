var firstImg = document.getElementsByTagName("img")[0]
firstImg.style = "position: absolute; right: 0; top:0;"

var imgClone = firstImg.cloneNode(true)

if(imgClone){
  imgClone.style = "position: absolute; left: 0; bottom:0;"
  
  document.body.append(imgClone)
  
  var myListDiv = document.querySelector("#navigation")
  
  myListDiv.style ="position: absolute; left:50% ; bottom:50%; transform:translate(-50% ,50%)"
  
  var myList = document.getElementById("nav")
  
  myList.style ="list-style-type:circle;"
  
  var listElements = document.querySelectorAll("[href]")
  
  var elementsArr = [...listElements]
  
  elementsArr.forEach(function (ele){
    ele.style = "color : blue;"
  })
}


