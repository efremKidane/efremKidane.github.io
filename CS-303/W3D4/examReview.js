/* eslint-disable */

function printHour(end){

    setTimeout( function stopWatch(){
       let date = new Date();
       let hour = date.getHours();
       let min = date.getMinutes();
       let sec = date.getSeconds();
   
       console.log(hour + ":" + min +":"+ sec);
       if( end > 0){
           setTimeout(stopWatch, 1000);
       }
       end = end -1;
   } ,1000);
   }
   
   
     
   
   
     printHour(10);