let x = 5;
let y = 8;
[y,x] = [x,y]
console.log(x,y)
//////////////////////////////////
function minMax(...arr){
  let res = [Math.min(...arr),Math.max(...arr)]
  return (res)
}

console.log(minMax(5,7,4,1,3))
//////////////////////////////////////
var fruits = ["apple", "strawberry", "banana", "orange","mango"];

console.log(fruits.every(ele=> typeof ele == "string"))

console.log(fruits.some(ele=> ele.startsWith("a")))

console.log(fruits.filter(ele => ele.startsWith("s") || ele.startsWith("b") ))

fruits.map(ele=> `i love ${ele}`).forEach(ele=> console.log(ele))

