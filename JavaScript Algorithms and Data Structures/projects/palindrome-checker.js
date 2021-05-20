function palindrome(str) {
  let shani=str.toLowerCase().replace(/[^a-z\d]/g,'');
  console.log(shani)
  return shani.split('').reverse().join('')===shani;
}



palindrome("eyeadw.....");
palindrome("_eye")
palindrome("race car")