function sumFibs(num) {
  let prevnumber=0;
  let currentnumber=1;
  let sum=0;

  while(currentnumber<=num){
    // check if curr number is odd
    if(currentnumber%2===1){
      sum+=currentnumber
      // console.log(sum)
    }
    // adding curr num with pre num and updating it
    currentnumber+=prevnumber;
    // console.log(currentnumber)
    prevnumber=currentnumber-prevnumber;
    // console.log(prevnumber);
  }

  return sum;
}

sumFibs(4);