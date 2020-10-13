function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit.eats); // will be false because both Rabbit and rabbit have one reference
                          // so changing one value in a property means changing the other too.