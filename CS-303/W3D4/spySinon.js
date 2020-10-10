function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
 console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }

  function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }