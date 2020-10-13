function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats); // will be true because the prototype change is taking pplace after the rabbit object is created by calling new.