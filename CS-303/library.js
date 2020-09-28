/*eslint-disable*/

 
let Library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        libraryID: 1254
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        libraryID: 4264
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Gamea",
        author: "Suzanne Collins",
        libraryID: 3245
    },
    
];
/**
 * 
 */

function addBook() {
    let obj = {

        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("Lid").value

    }

    Library.push(obj)

    

}

/**
 * 
 */
function showTitle() {


    let result = Library.map(item => {
        return item.title
    })
   
    document.getElementById('txtarea').innerHTML = result.join('\n')
    



}

/**
 * 
 */

function showAuthor() {
    let result = Library.map(item => {
        return item.author
    })
    document.getElementById('txtarea').innerHTML = result.join('\n')

}
/**
 * 
 */
function showId() {
    let result = Library.map(item => {
        return item.libraryID
    })
    document.getElementById('txtarea').innerHTML = result.join('\n')

}

function scramble() {

    let result = Library.map(item => {
        return item.title
    
});
 
 let oneString = result.join(" ");
 let arryOfWords=oneString.split(" ");
 

 let word1=[];

   for (n of arryOfWords){
     if (n.length === 2){
        word1.push(n);
       
     }
   
    }
    
    let word2=[];
    for (n of arryOfWords){
        if (n.length === 3){
           word2.push(n);
          
        }
      
    }
      
        let word3=[];
        for (n of arryOfWords){
            if (n.length === 4){
               word3.push(n);
              
            }
      
       }
     document.getElementById('txtarea').innerHTML = word1+ "\n" +word2 + "\n"+ word3;
    }
   


