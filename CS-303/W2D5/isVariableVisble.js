let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

// variable is not viible becouse of the global variable x is shadowing by 
// the local variable x 