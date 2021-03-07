let nums = [-1, 0, 1, 2, -1, -4];

// 暴力法：3重循环
// 存在重复问题:[ [ -1, 0, 1 ], [ -1, 2, -1 ], [ 0, 1, -1 ] ]
function threeSum(nums){
   let res = []
   for(let i = 0 ; i < nums.length-2 ; i++){
     for(let j = i+1 ; j < nums.length-1 ; j++){
       for(let k = j+1 ; k < nums.length ; k++){
           if(nums[i]+nums[j]+nums[k] == 0 ){
             res.push([nums[i],nums[j],nums[k]])
           }
       }
     }
   }
  return  res;
};

// 双指针法
function threeSum1(nums){
  let res = [];
  const len = nums.length;
  if(nums == null || nums.length < 3)
    return res;
  
  nums.sort((a,b)=>{  //排序
    return a-b
  })
  
  for(let k = 0 ; k < len-2 ; k++){
    if(nums[k] > 0 )
      break;
    //前后两个数字重复，会导致结果重复，这行必须有
    if(k > 0 && nums[k] == nums[k-1])
      continue;
    
    let L  = k+1;
    let R  = len-1;
    while(L < R ){
      const sum = nums[k] + nums[L] + nums[R];
      if(sum == 0){
        res.push([nums[k],nums[L],nums[R]]);
        while(L < R && nums[L] == nums[L+1]) // 去重
          L++;
        while(L < R && nums[R] == nums[R-1]) // 去重
          R--;
        
        L++;
        R--;
//       ①、不去重版}
//       else if (sum < 0 ) L++;
//       else if (sum > 0 ) R--;
        
//       ②、去重版
      }else if(sum > 0){
        R--;   // sum > 0时，R一定要先减1，如果不先减1，在R边相邻两个数不相等的                   情况下，永远在原地打转，L边也是同理
        while(L < R && nums[R] === nums[R-1]) // 去重   
          R--; 
//       简写版：
//         else if(sum > 0){
//           while(L < R && nums[R] === nums[--R])
//         }
      }else{
        while(L < R && nums[L] === nums[++L]); // 去重
      }
    }
  }
  return res;
}




