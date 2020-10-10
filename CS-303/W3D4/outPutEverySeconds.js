function outNumbers ( from, to){
    let timerId = setInterval(function (){
        console.log(from);
        if ( from === to){
            clearInterval(timerId);
        }
        from++;
    } , 1000);
}

outNumbers(2, 7);