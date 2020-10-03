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

   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);

  function findListNode(list,str) {
    if (list.value === str){
        return list;
    }
    if(list.descendents === []) {
    return "end";
    } 
    else {
    
    for(let descendent of list.descendents){
    findListNode(descendent);
    }
    }
    }
 
    console.log(findListNode(abe,"Bart"));

   