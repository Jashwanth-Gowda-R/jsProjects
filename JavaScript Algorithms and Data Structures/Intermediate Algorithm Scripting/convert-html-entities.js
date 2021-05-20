const obj={
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  '"':'&quot;',
  "'":'&apos;'
}

function convertHTML(str) {
  let arr=str
            .split('')
            .map((ele)=>{
              if(obj.hasOwnProperty(ele)){
                return obj[ele];
              }else{
                return ele;
              }
            });
  
  // console.log(arr);

  return arr.join('');

}

convertHTML("Dolce & Gabbana");


console.log(convertHTML("Hamburgers < Pizza < Tacos"))

console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
