//Conor Kennedy
//8/8/2017

/*
Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
*/

function isEven(x){
  if(x == 0)
    return true;
  else if(x == 1)
    return false;
  else if(x < 0)
    return isEven(-x) //deals with -1 case
  else
    return isEven(x -2)
}


console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
