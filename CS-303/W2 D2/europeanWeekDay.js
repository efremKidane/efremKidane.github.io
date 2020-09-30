
function getLocalDay(date){
    let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}


let date = new Date(2012, 0, 3);  
console.log( getLocalDay(date) );