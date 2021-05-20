function frankenSplice(arr1, arr2, n) {
  let newarray=arr2.slice();
  newarray.splice(n,0, ...arr1);
  console.log(newarray);
  return newarray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

`Since our goal is to return the new array with out altering arr1 or arr2 we create a localArr and add all the items from arr2 using the slice() function

Since the splice() function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of arr1 into localArr. n is the starting position where our content will be inserted. We won’t be deleting any elements so the next argument is 0. Then we add the entire contents of arr1 using spread syntax ....

localArr is returned and the function is complete.`