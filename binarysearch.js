let arr = [10, 20, 30, 40, 50, 60,70];
//binary search
let low = 0;
let high=0;
if(arr.length%2==0){
 high = arr.length;
}
else{
  high=arr.length-1
}
// console.log(high)
// let mid = 0;
let x = 60;
//find the index of the element
while (low <= high) {
  let mid = (low + high) / 2;
  if (arr[mid] == x) {
    console.log(mid);
    break;
  } else if (arr[mid] > x) { //x is on the right side
    high = mid - 1;
  } else {
    low = mid + 1; //x is on left side
  }
//   let mid = (low + high) / 2;
}






