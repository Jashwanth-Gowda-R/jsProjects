function translatePigLatin(str) {
  let result='';
  let regex=/[aeiou]/gi;
  // Check if the first character is a vowel
  if(str[0].match(regex)){
    result=str+'way'
  }else if(str.match(regex)===null){
    // Check if the string contains only consonants
    result=str+'ay'
  }else{
    // Find how many consonants before the first vowel.
    let vowelIndex=str.indexOf(str.match(regex)[0])
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    result=str.substr(vowelIndex)+str.substr(0,vowelIndex)+'ay';
  }
  return result;
}

translatePigLatin("consonant");