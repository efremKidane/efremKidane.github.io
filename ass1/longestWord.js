
function longest(str) {
    
    let word;
  
    let longest_word_length = 0;
  
   for(var i = 0; i < str.length; i++){
     if(longest_word_length < str[i].length){
         longest_word_length = str[i].length;
        
     }
  }
  return longest_word_length;
  }

  console.log(longest(["efi","nardi","love"]))