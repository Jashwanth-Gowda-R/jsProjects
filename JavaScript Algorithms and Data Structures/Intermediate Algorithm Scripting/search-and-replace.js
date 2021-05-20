function myReplace(str, before, after) {
  if(before[0]===before[0].toUpperCase()){
    after=after[0].toUpperCase()+after.slice(1);
    console.log(after)
  }else{
    after=after[0].toLowerCase()+after.slice(1);
  }

  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))