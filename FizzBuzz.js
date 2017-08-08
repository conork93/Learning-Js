//Conor Kennedy
//8/7/2017

"FizzBuzz"

for(var x = 1; x < 101; ++x){
  if(x % 3 == 0){
    if(x % 5 == 0){
      console.log("FizzBuzz")
    }
    console.log("Fizz")
  }
  if(x % 5 == 0){
    console.log("Buzz")
  }
  console.log(x)
}
