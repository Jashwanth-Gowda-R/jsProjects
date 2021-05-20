function uniteUnique(arr) {
  let unionarr=[];
  // this is done because the aruguements are unknown
  let allarr=Array.from(arguments).reduce((arr1,arr2)=>arr1.concat(arr2))
// console.log(allarr)
  allarr.forEach((ele)=>{
    if(!unionarr.includes(ele)){
      unionarr.push(ele);
    }
  });
  return unionarr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1]))
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1,0]))
