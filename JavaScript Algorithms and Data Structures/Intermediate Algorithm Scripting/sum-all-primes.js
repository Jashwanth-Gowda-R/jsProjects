function isprime(x){
  if(x==2){
    return true;
  }
  for(let i=2;i<x;i++){
    if(x%i==0){
      return false;
    }
  }
  return true;
}
// console.log(isprime(7))

function sumPrimes(num) {
  let sum=0;
  for(let i=2;i<=num;i++){
    if(isprime(i)){
      sum+=i;
    }
  }
  return sum;
}

sumPrimes(10);
console.log(sumPrimes(10))
console.log(sumPrimes(977))

