var inputBar = document.querySelector("input")

function EnterNumber(value){
  inputBar.value += value
}

function EnterEqual(){
  var res = eval(inputBar.value);
  inputBar.value = res;
}

function EnterOperator(value){
  inputBar.value += value
}

function EnterClear (){
  inputBar.value ="";
}