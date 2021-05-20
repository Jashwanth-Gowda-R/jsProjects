function fearNotLetter(str) {
  let start=str.charCodeAt(0);
  let last=str.charCodeAt(str.length-1);

  for(let i=start;i<=last;i++){
    let code=String.fromCharCode(i);
    let mycode=str[i-start]
    
    if(code !== mycode){
      return code;
    }

  }


}

fearNotLetter("abce");

console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
