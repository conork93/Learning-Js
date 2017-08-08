//Conor Kennedy
//8/8/2017

/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one
*/

function range(start, end){
  var arr = [];
  for(var i = start; i < end + 1; ++i){
    arr.push(i);
  }
  return arr;
  
}

function sum(arr){
  var total = 0;
  for (var i = 0; i < arr.length; i++)
    total += arr[i];
  return total;  
}

function range2(start, end, step){
   if (step == null){
     step = 1;
   }
  var arr = [];

  if (step > 0) {
    for (var i = start; i < end + 1; i += step)
      arr.push(i);
  } 
  else {
    for (var i = start; i > end - 1; i += step)
      arr.push(i);
  }
  return arr;
}

console.log(range(1, 10));
console.log(sum(range(1, 10)))
console.log(range2(1, 10, 2))
console.log(range2(5, 2, -1))
