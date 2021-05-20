// Only change code below this line
function countdown(n){
  if(n<=0){
    return [];
  }else{
    const array= countdown(n-1);
    array.unshift(n);
    return array;
  }

}
// Only change code above this line

// 
// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));