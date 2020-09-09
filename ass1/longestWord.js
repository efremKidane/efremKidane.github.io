"use strict";
/* eslint-disable */
/**
 * .
 * @param {str}.

 * @returns The sum of the two numbers.
 */
function longest(str) {
    
    
  
    let longestWordLength = 0;
  
   for(var i = 0; i < str.length; i++){
     if(longestWordLength < str[i].length){
         longestWordLength = str[i].length;
        
     }
  }
  return longestWordLength;
  }

  alert(longest(["efi","nardi","love"]));