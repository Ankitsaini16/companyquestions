let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let c=3;
for (let i = 0; i < matrix.length; i++) {
  for (let j = i; j < matrix[i].length; j++) {
    //transpose  of matrix
    if(i!=j){
     let temp=matrix[i][j]   
    matrix[i][j] = matrix[j][i];
    matrix[j][i]=temp
    }
}
}
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < c/2; j++) {
      //transpose  of matrix
    //   if(i!=j){
       let temp=matrix[i][j];
      matrix[i][j] = matrix[i][c-j-1];
      matrix[i][c-j-1]=temp;
    //   }
  }
  }
console.log(matrix);
