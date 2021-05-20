function rot13(str) {
  const alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // console.log(alpha.length);
  let cipher=''
  for(let i=0;i<str.length;i++){
    let shani=alpha.indexOf(str[i]);
    if(shani == -1){
      cipher += str[i]
    }else{
      let jash = (shani + 13) % 26;
      cipher += alpha[jash];
    }
  }
  return cipher;
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"))