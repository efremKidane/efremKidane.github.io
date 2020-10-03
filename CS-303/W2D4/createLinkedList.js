class Node {
    constructor(value,next) {
    this.value = value;
    this.next = next;
    }
   }
   // create nodes with values
   const abe = new Node('Abe');
   const homer = new Node('Homer');
   const bart = new Node('Bart');
   const lisa = new Node('Lisa');
   const maggie = new Node('Maggie');
   // associate root with is descendents
   abe.next = homer;
   homer.next = bart;
   bart.next = lisa;
   lisa.next = maggie;
   maggie.next = null;
   //homer.descendents.push(bart, lisa, maggie);

   console.log(abe);