let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  alert( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  alert( lazy.stomach ); // apple

  // becouse stomach is found in hamster wich both speedy and lathy inherits from hamster so apple is written 
  // in stomach in hamster and lazy inherits from that so lazy.stomach will be 
  // apple too.