var myInput = document.getElementsByTagName("input")[0]

myInput.addEventListener("input",(e)=>{
  if(!isFinite(e.target.value)){
    e.target.value = e.target.value.slice(0 , e.target.value.length -1)
  }
})