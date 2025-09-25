
// function sum() {
//   let argsArray = Array.from(arguments)
//   console.log(argsArray);
//   return argsArray.reduce((total, current) => {
//     return total+current
//   },0)
// }
// sum(1,2,3,4)


function sum() {
  let arr = Array.from(arguments)
 return  arr.reduce((total, current) => {
    return total+current
  },0)
}
console.log(sum())
