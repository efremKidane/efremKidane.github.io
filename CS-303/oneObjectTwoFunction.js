let obj = {};


function One() { return obj; }
function Two() { return obj; }



console.log( new One() == new Two() );