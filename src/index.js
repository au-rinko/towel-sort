
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newMatrix = [];
    if(matrix){
        for(let i = 0; i < matrix.length; i++){
            i % 2 === 0 ? newMatrix = newMatrix.concat(matrix[i]) : newMatrix = newMatrix.concat(matrix[i].reverse());
        }
    }
  return newMatrix;
}
