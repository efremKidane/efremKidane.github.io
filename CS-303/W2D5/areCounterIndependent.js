function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); 
  alert( counter() ); 
  
  alert( counter2() ); 
  alert( counter2() );

  // yes it is independent counter2 is independen of counter 
  // the out put for counter2 will be 0 ,1