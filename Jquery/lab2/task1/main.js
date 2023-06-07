let imgs= document.querySelectorAll("main img")
let imgsSrcs =[]; 
let currImgIndex;
imgs.forEach(img => imgsSrcs.push(img.src))

$("img").on("click", function(e) {
  $("body").append(`<div> <img id='currImg' src=${e.target.src}> <button>next</button> <button>prev</button> </div>`)
  currImgIndex = (e.target.id -1)
});

$("body").on("click", "button:contains('next')", function(e) {
  if(currImgIndex == 3){
    currImgIndex = 0
  }
  $("#currImg").attr("src", imgsSrcs[currImgIndex]);
  currImgIndex++
});

$("body").on("click", "button:contains('prev')", function(e) {
  if(currImgIndex == 0){
    currImgIndex = 3
  }
  currImgIndex--
  $("#currImg").attr("src", imgsSrcs[currImgIndex])
});

$("body").on("click", "div", function(e) {
e.target.remove()
});

