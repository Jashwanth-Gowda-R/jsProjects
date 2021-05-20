function factorialize(num) {
  for(var product=1;num>0;num--){
    product=product*num
  }
  return product;
}

factorialize(5);