// Anonymous function
 (function (a, b, c) {
   return a + b + c
 })

// Function expression
  const sum = function (a, b) {
    return a + b
 }
 
 const result = sum(6, 67);
 console.log(result)

const anotherSUM = sum
console.log(anotherSUM(5, 9))


 let x = 3  // using const causes TypeError because you can't be assign twice constant variable.
 console.log(x)

 x = sum
 console.log(x(11, 16))

