function countspecificnumber(m,n){
  let count;
let flag;
  let finalcount=0;
  let temp=0;
  for(let i=m;i<=n;i++){
      count=0;
      flag=0;
      temp=i
    while(temp>0){
      let rem=parseInt(temp%10)//0
      if(rem==1||rem==4||rem==9){
        count++//3
      }else{
        flag++//0
      }
      let rel=parseInt(temp/10)//10
      temp=rel
     
    }
     if(count==3&&flag==0){
      finalcount++;
    }
    
  }
  return finalcount 
}
console.log(countspecificnumber(100,200))