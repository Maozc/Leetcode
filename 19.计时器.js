function count(start,end){
  console.log(start);
  let timer = setInterval(()=>{
    if(start <= end){
      console.log(start++);
    }else{
      clearInterval(timer)
    }
  },100);
  // 返回一个对象
  return{
    cancel:function(){
      clearInterval(timer)
    }
  }
}

count(100,130);
