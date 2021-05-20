function smallestCommons(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var result = max;

  for(var i = max; i >= min; i--){
    if(result % i !== 0){
      result += max; 
      // console.log(result);
      i = max;
      // console.log(i);
    } 
  }
  return result;  
}


smallestCommons([1,5]);
// console.log(smallestCommons([2,10]))
// console.log(smallestCommons([23, 18]))