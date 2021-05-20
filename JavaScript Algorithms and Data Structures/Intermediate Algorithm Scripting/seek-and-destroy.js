function destroyer(arr,...args) {
  // console.log(arr.filter((ele)=>!args.includes(ele)))
  return (arr.filter((ele)=>!args.includes(ele)))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);