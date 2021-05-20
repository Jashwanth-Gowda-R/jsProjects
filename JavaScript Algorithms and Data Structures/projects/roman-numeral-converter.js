const roman={
  1:'I',
  4:'IV',
  5:'V',
  9:'IX',
  10:'X',
  40:'XL',
  50:'L',
  90:'XC',
  100:'C',
  400:'CD',
  500:'D',
  900:'CM',
  1000:'M'
}
function convertToRoman(num) {
  let shani='';
  const decimals=Object.keys(roman).reverse();
  // console.log(decimals);
  decimals.forEach((decimal)=>{
    while(decimal<=num){
      shani+=roman[decimal];
      num-=decimal;
    }
  });
 return shani;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));