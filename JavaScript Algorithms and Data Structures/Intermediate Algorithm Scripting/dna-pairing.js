function pairElement(str) {
   const pairs={
    'A':'T',
    'T':'A',
    'G':'C',
    'C':'G',
  }
  return str.split('').map((ele)=>{
    return [ele,pairs[ele]]
  });
}

console.log(pairElement("TTGAG"))
pairElement("GCG");