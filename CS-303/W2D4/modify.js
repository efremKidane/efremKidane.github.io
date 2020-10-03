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
  // converting to cabs
   function allCaps(node){
    console.log((node.value).toUpperCase());
    if(node.descendents === []) {
    return "end";
    } 
    else {
    
    for(let descendent of node.descendents){
        allCaps(descendent);
    }
    }
    }
    console.log(" \n All Caps \n ");
    allCaps(abe);

    // adding *** before and  after the value

    function addStars(node){
        console.log(("***"+node.value+"***"));
        if(node.descendents === []) {
        return "end";
        } 
        else {
        
        for(let descendent of node.descendents){
        addStars(descendent);
        }
        }
        }
        console.log(" \n add stars \n");
        addStars(abe);

        // reversing the strings in the value

        function reverseNode(node){
            console.log(node.value.split("").reverse().join(""));
            if(node.descendents === []) {
            return "end";
            } 
            else {
            
            for(let descendent of node.descendents){
                reverseNode(descendent);
            }
            }
            }
            console.log(" \n reverse the node values \n");
            reverseNode(abe);