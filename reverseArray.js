//Conor Kennedy
//8/8/2017

/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array
that has the same elements in the inverse order. The second, reverseArrayInPlace,
does what the reverse method does: it modifies the array given as argument in
order to reverse its elements.
*/

function reverseArray(arr){
  reversed =[]
  
  for(var i = arr.length -1; i > -1; --i){
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); ++i) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}


console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
