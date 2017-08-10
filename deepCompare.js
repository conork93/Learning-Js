//Conor Kennedy
//8/10/2017

/*
Write a function, deepEqual, that takes two values
and returns true only if they are the same value or
are objects with the same properties whose values are
also equal when compared with a recursive call to deepEqual.
*/

function deepEqual(a, b){
  if(a == b){
    return true;
  }
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
  
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
