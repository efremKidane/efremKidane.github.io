class TreeNode {
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

   function contains(node, target) {
    /* base case -- if children is null or empty */
    if (node.descendents === []) {
        if (node.value === target) {
            return true;
        }
         else {
            return null;
        }
    } else { //reductive recursion step
        let childResult = false;
        if (node.value === target){
            return node;
        } 
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return null; //did not find the target 
    }
  }
  
  console.log("testing Lisa, should be true: ", contains(abe, "Lisa"));
  console.log("testing span, should be false: ", contains(abe, "span"));