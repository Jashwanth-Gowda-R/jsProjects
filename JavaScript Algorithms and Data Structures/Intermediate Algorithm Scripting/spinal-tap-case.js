function spinalCase(str) {
  let newword=str.replace(/([a-z])([A-Z])/g,'$1_$2');
  // console.log(newword);
  let regex=/[\s_]/;
  let word=newword.toLowerCase().split(regex).join('-')
  return word;
}

spinalCase('ThisIsSpinalTap');
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))