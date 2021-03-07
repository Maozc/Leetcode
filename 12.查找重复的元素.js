let arr = [1,2,4,4,3,3,1,5,3];

// for
function repeatCount(arr){
  let resarr= [];
  arr.sort();
  for(let i =1;i< arr.length;i++){
    if(arr[i] === arr[i-1] && resarr.indexOf(arr[i]) == -1){
      resarr.push(arr[i])
    }
  }
  return resarr;
}

//foreach
function repeatCount1(arr){
  let resarr= [];
  arr.sort();
  arr.forEach(v=>{
    if(arr.indexOf(v) !== arr.lastIndexOf(v) && resarr.indexOf(v) == -1)
      {
        resarr.push(v)
      }
  })
  return resarr;
}

//reduce
function repeatCount2(arr){
  let resarr= [];
  arr.sort();
  arr.forEach(v=>{
    if(arr.indexOf(v) !== arr.lastIndexOf(v) && resarr.indexOf(v) == -1)
      {
        resarr.push(v)
      }
  })
  return resarr;
}

let res = repeatCount(arr);
let res1 = repeatCount1(arr);
res
res1


