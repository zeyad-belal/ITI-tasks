// function* genFab(numOfValues){
//   let firstNum =0
//   let secNum = 1
//   yield firstNum

//   for(let i=1 ; i< numOfValues ; i++){
//     // prev(first) + curr(sec)
//     let theNum= firstNum + secNum 
//     secNum = firstNum    
//     firstNum = theNum           
//     yield  theNum
//   }
// }
// // 1 1 2 3 5 8 13
// // 0 1 1 2 3 5 8 13
// let fab = genFab(5)

// console.log(fab.next())
// console.log(fab.next())
// console.log(fab.next())
// console.log(fab.next())
// console.log(fab.next())
// console.log(fab.next())


///////////////////////////

function* genFab2(lastValue){
  let firstNum =0
  let secNum = 1
  yield firstNum

let i = 0 
do{
  let theNum= firstNum + secNum 
  secNum = firstNum    
  firstNum = theNum   
  i= theNum
  if(theNum < lastValue){
    yield  theNum
  }
}while(i < lastValue)

}

let fab2 = genFab2(10)
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())
console.log(fab2.next())