document.addEventListener("keydown", function(e) {
  // alert(e.keyCode)
  var mess;
  if (e.altKey) {
    mess ="Alt key pressed";
  }
  if (e.shiftKey) {
    mess ="Shift key pressed";
  }
  if (e.ctrlKey) {
    mess ="Ctrl key pressed";
  }
  alert(e.key.charCodeAt(0))
  if(mess){
    alert(mess)
  }
})