//Conor Kennedy
//8/10/17

/*
Use the reduce method in combination with the concat 
method to “flatten” an array of arrays into a single 
array that has all the elements of the input arrays.
*/


var arr = [[1, 2, 3], [4, 5], [6]];

console.log(arr.reduce(function(flat, current) {
  return flat.concat(current);
}, []));
