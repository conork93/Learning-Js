//Conor Kennedy
//8/11/17

/*
every returns true only when the predicate returns true
for all elements of the array. Similarly, some returns 
true as soon as the predicate returns true for any of the
elements. They do not process more elements than necessary
*/

function every (arr, predicate){
  
  for (var i = 0; i < arr.length; ++i){
    if(!predicate(arr[i])){
      return false;
    }    
  }
  return true;
}

function some (arr, predicate){
  for (var i = 0; i < arr.length; ++i){
    if(predicate(arr[i])){
      return true;
    }    
  }
  return false;
  
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
