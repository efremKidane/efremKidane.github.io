function Rabbit() { }
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log(rabbit.eats); // will be true too because the eats property from the constructor have that value even if the one in rabbit is deleted.