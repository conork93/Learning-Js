//Conor Kennedy
//8/8/2017

/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

/*
function countBs(s){
  count = 0;
  for(var i = 0; i < s.length; ++i){
    if("B" == s.charAt(i))
      ++count;
  }
  return count;
}
*/


function countChar(s, c){
  count = 0;
  for(var i = 0; i < s.length; ++i){
    if(c == s.charAt(i))
      ++count;
  }
  return count;
}

function countBs(s){
  return countChar(s, "B")
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))
