function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // will be undefined because now there is no eats property anywhere.