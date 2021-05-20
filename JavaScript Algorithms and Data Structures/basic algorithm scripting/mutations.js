function mutation(arr) {
  let arr1=arr[1].toLowerCase();
  let arr2=arr[0].toLowerCase();
  for(let i=0;i<arr1.length;i++){
   if (arr2.indexOf(arr1[i])<0){
     return false;
   }
  }
  return true;
}

mutation(["hello", "hey"]);

`Code Explanation
First we make the two strings in the array lowercase. test will hold what we are looking for in target.
Then we loop through our test characters and if any of them is not found we return false.

If they are all found, the loop will finish without returning anything and we get to return true.`