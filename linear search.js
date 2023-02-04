let arr = [10, 20, 30, 40, 50];
let count = 0;
let temp=0
for (let t in arr) {
  if (arr[t] == 10) {
    console.log("element found on index", t);
    temp++
  }
  
}
if(temp==0){
  console.log("element not found")
}
