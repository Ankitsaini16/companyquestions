//accenture question
let arr=[8,4,5,3,2,6,9,1]
//189,120,90,45,15,9,0,0
let arr1=[]
let great=0;
let lower=0;
for(let i=0;i<=arr.length-1;i++){
  for(let j=i;j<=arr.length-1;j++){
    if(arr[i]>arr[j]){
      lower+=arr[j]
    }else if(arr[i]<arr[j]){
      great+=arr[j]
    }
  }
  arr1[i]=lower*great
  lower=0
  great=0
}

console.log(arr1)