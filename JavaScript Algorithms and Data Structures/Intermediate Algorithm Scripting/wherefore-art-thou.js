function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let props=Object.keys(source);
  console.log(props)
  arr=collection
   .filter(obj=>{
    return props.every(prop=>{
      return obj.hasOwnProperty(prop) && 
      obj[prop]===source[prop];
    })
  });
  // Only change code above this line
  return arr;
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })