 "use strict"
 
 let name = "John";

 function sayHi() {
   alert("Hi, " + name);
 }
 
 name = "Pete";
 
 sayHi();
 
 // yes the output will be "pete" cos the name value modifies from john
 //to "pete" before the function call
