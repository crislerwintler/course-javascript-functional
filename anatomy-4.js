// Anonymous function
//  IIFE - Immediately Invoked Function Expression
  (function (a, b, c) {
      let x = 3
      console.log(`Result ${a, b, c}`)
      console.log(x)
  })(3, 9, 12);

  (function () {
    let x = 300
    console.log(x)
  })();

 // Arrow
  (()=> {
  console.log('Arrow #1')
  })();

 (() => console.log('Arrow #2'))();
