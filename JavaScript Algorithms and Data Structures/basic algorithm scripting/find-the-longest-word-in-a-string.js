function findLongestWordLength(str) {
  let word=str.split(' ');//converting into array
  // console.log(word);
  let longest_word=0;
  for(let i=0;i<word.length;i++){
    if(word[i].length>longest_word){
      longest_word=word[i].length;
    }
  }
  return longest_word;
}

findLongestWordLength("The quick brown fox jumped over the lazy d");