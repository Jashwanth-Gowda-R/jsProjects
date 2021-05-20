function repeatStringNumTimes(str, num) {
  let repeatword='';
  while(num>0){
    repeatword+=str;
    num--;
  }
  return repeatword;
}

repeatStringNumTimes("abc", 3);