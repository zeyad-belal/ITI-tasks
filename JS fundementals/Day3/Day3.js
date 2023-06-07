function onlyTwo (x,y){
  if(arguments.length !== 2 ){
    throw("insert only two args")
  }
}

onlyTwo(3,6)

//////////////////////////////////////////////////

function reverse (){
  var result = '';
  for (var i = arguments.length -1  ; i >= 0 ; i--){
    result += arguments[i] + ' '
  }
  return result
}

console.log(reverse(1,2,3,4))

//////////////////////////////////////////////

function add (){
  var myResult = 0;  

  for(var i = 0 ; i < arguments.length ; i++){

    if(isFinite(arguments[i])){
      myResult += arguments[i]
    }else{
      throw("numbers only")
    }

  }
  return myResult;
} 

console.log(add(1,2,'g'))

/////////////////////////////////////////////

function takeInput(message){
  var num = prompt(message)
  if(isFinite(num)){
    return num
  }else{
    throw("only nums")
  }
}

console.log(takeInput("your birthday?"))
console.log(takeInput("ur phone num?"))
