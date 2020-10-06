function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
 
  let work = makeWorker();
  
  
  work();

  // the local varible is availble that is "pete" becouse the function
  // always first use its local variable the goes to global