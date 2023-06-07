var imgsContainer = document.getElementsByClassName("container")[0]
var myImgs = document.querySelectorAll("img")

var currentImgIndex = 0;

function swipe(){
  var redMarbel = document.getElementById("red")
  // swiping src
  redMarbel.src = "marble1.jpg"
  myImgs[currentImgIndex ].src = "marble2.jpg"

  if(currentImgIndex > 0){
    myImgs[currentImgIndex - 1].src = "marble1.jpg"
  }
  // to fix the last marbel
  if(currentImgIndex == 0){
    myImgs[4].src = "marble1.jpg"

  }
  currentImgIndex++
  // reached the end ? start over
  if(currentImgIndex > 4 ){
    currentImgIndex = 0
  } 
  console.log(currentImgIndex)
}

var myInterval = setInterval(swipe,1000)

imgsContainer.addEventListener("mouseleave" , ()=>{
  myInterval = setInterval(swipe,1000)
})

imgsContainer.addEventListener("mouseenter" , ()=>{
  clearInterval(myInterval)
})