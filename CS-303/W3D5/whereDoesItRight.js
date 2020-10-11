let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat(); 
  // in thr object rabbit becouse this always refers to the object before the dot