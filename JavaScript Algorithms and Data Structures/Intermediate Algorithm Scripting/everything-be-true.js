function truthCheck(collection, pre) {
  return collection.every(ele=>{
    return (ele.hasOwnProperty(pre)&& Boolean(ele[pre]));
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");