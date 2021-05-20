function truncateString(str, num) {
  if(str.length>num){
    var word=(str.slice(0,num))
    word+='...';
    console.log(word);
  }else if(str.length<=num){
    var word=str;
  }
  return word;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)