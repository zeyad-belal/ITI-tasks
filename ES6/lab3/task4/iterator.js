let myObj = {
  name :"zeyad",
  age:24,
  [Symbol.iterator] : generator
}


function* generator(){
  let entries = Object.entries(myObj)
  for(let i=0 ; i< entries.length ; i++){
    yield entries[i]
  }
}


for(let pairs of myObj){
  console.log(pairs)
}




// myObj[Symbol.iterator] = myIterator

// function myIterator(){
//   let index = -1;
//   let values = Object.values(myObj)

//   let iterator ={
//     next:function(){
//       index++
//       if(index < values.length){

//         return{
//           value:values[index],
//           done:false
//         }

//       }else{
//         return{
//           value:values[index],
//           done:true
//         }
//       }

//     }
//   }
//   return iterator
// }

// console.log(myObj.next())
// for(value of myObj){
//   console.log(value)
// }