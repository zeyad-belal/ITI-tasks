var btns = document.getElementsByTagName("button")
var imgsContainer = document.getElementsByClassName("imgs")
var imgs = document.getElementsByTagName("img")
var imgsArr = [...imgs]


var nextBtn = document.getElementById("next")
var slideBtn = document.getElementById("slide-show")
var stopBtn = document.getElementById("stop")
var preBtn = document.getElementById("previous")

var currentImgIndex = 0;

nextBtn.addEventListener("click" , ()=>{
  //remove current class from all imgs
  imgsArr.forEach((img) => {
    img.classList.remove("current")
  });
  // check if we are already reached the last pic
  if(currentImgIndex == 5){
    currentImgIndex--
  }
  //add current class 
  currentImgIndex++
  imgsArr[currentImgIndex].classList.add("current")
  
})


preBtn.addEventListener("click" , ()=>{
  //remove current class from all imgs
  imgsArr.forEach((img) => {
    img.classList.remove("current")
  });
  // check if we are already reached the first pic
  if(currentImgIndex == 0 ){
    currentImgIndex++
  }
  //add current class 
  currentImgIndex--
  imgsArr[currentImgIndex].classList.add("current")
})

var slideShowInterval;
slideBtn.addEventListener("click" , (e)=>{
  //disable btn to prevent multi intervals
  e.target.setAttribute("disabled", "");

  slideShowInterval = setInterval(()=>{
    //remove current class from all imgs
    imgsArr.forEach((img) => {
      img.classList.remove("current")
    });
    // check if we are already reached the last pic
    if(currentImgIndex == 5){
      currentImgIndex = -1;
    }
    //add current class 
    currentImgIndex++
    imgsArr[currentImgIndex].classList.add("current")
  },2000)
})

stopBtn.addEventListener("click", (e)=>{
  clearInterval(slideShowInterval)
  slideBtn.removeAttribute("disabled");
})