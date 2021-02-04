// switching from books collection to new book form page when clicking 
// in the button add Book

function newBookForm() {
    return window.location.href = "./addBook.html";
}

fetchBooks();
var data = [];

// getting data array of objects from the api using async awit fetch

async function fetchBooks() {
    const login_url = " https://elibraryrestapi.herokuapp.com/elibrary/api/book/list";
    const result = await fetch(login_url)
    data = await result.json()
    buildTable(data);
}

// displaying the data in a table in books collection page

function buildTable(data) {
    let table = document.getElementById("myTable");
    table.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        let row = ` 
                        <td>${i + 1}</td>
                        <td>${data[i].isbn}</td>
                        <td>${data[i].title}</td>
                        <td>${data[i].overdueFee}</td>
                        <td>${data[i].publisher}</td>
                        <td>${data[i].datePublished}</td>
                        <td><a href ="#" data-toggle="tooltip" data-placement="bottom" id="edit"
                           onclick="editBook(${data[i].bookId}, ${i})">
                          Edit</a></td>
                        <td><a href ="#" data-toggle="tooltip" data-placement="bottom" id ="delete" 
                          onclick = "deleteBook(${data[i].bookId},${i})">
                          Delete</a></td>`
        table.innerHTML += row;

    }
}

// deleting a book from book collection page table and also from the api

async function deleteBook(deleteId, index) {
    let confirmation = confirm(`are you sure you  want to delete
                                    the book with  ISBN ${data[index].isbn}
                                    with title ${data[index].title}`);
    if (confirmation === true) {
        
       
        data.splice(index, 1);
        buildTable(data);

        const login_url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${deleteId}`;

        const result = await fetch(login_url, {
            method: 'delete'
        });
        showSuccessDelete()
        const restData = await result.json();
        
    }
} 

// editing the existing data of collections in the api as well as in the table of book collection page

function editBook(bookId, index){
    let id = bookId;
   
    document.querySelector(".container").innerHTML = x;
    document.querySelector("#isbn").value = data[index].isbn;
    document.querySelector("#bookTitle").value = data[index].title;
    document.querySelector("#overdueFee").value = data[index].overdueFee;
    document.querySelector("#publisher").value = data[index].publisher;
    document.querySelector("#dateOfPublished").value = data[index].datePublished;
    
  document.querySelector("#edit").onclick = async function update(){
    const login_url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${id}`;

    const result = await fetch(login_url, {
        method: 'PUT',
        body : JSON.stringify({
            isbn : document.querySelector("#isbn").value,
            title : document.querySelector("#bookTitle").value,
            overdueFee: document.querySelector("#overdueFee").value,
            publisher: document.querySelector("#publisher").value,
            datePublished: document.querySelector("#dateOfPublished").value
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    });
    const restData = await result.json();
    clearField();
     showSuccessUpdate();
}

}

// to clear the input values of the edit book form

function clearField() {
    document.querySelector("#isbn").value = '';
    document.querySelector("#bookTitle").value = '';
    document.querySelector("#overdueFee").value = '';
    document.querySelector("#publisher").value = '';
    document.querySelector("#dateOfPublished").value = '';
}

// to alert when you are edited the document succefully
function showSuccessUpdate() {
    document.getElementById("display").innerHTML = `<div class="row">
    <div class="col">
        <div class="alert alert-success" role="alert">
            Successfully Edited !
        </div>
    </div>
</div>`

setTimeout(()=>{ 
    window.location.href = "./books.html";
},2000)

}


function showSuccessDelete() {
    document.getElementById("delete").innerHTML = `<div class="row">
    <div class="col">
        <div class="alert alert-success" role="alert">
            Successfully deleted !
        </div>
    </div>
</div>`

setTimeout(()=>{ 
    window.location.href = "./books.html";
},2000)

}












// a page for edit book form

  
     const  x = `
    <div class="container pt-3 my-3">
        <h2 class="text-info">
            Edit Book Form
        </h2></br>
       <p><b>Note:</b> Form field marked with asterisk (*) are required.</p>
        <form id="display">
            <div class="form-row">

                <div class="form-group">
                    <label for="inputAddress">*Book title</label>
                    <input type="text" class="form-control" id="bookTitle" value="">
                </div>

            </div></br>
            <div class="row">
                <div class="col">
                    <label for="inputAddress">*ISBN</label>
                    <input type="text" class="form-control" id="isbn" value="">
                </div>
                <div class="col">
                    <label for="inputAddress">*Overdue Fee per day</label>
                    <input type="text" class="form-control" placeholder="0.00" id ="overdueFee" value="">
                </div>
            </div></br>

            <div class="row">
                <div class="col">
                    <label for="inputAddress">*Publisher</label>
                    <input type="text" class="form-control" id ="publisher" value="">
                </div>
                <div class="col">
                    <label for="inputAddress">*Date of Published</label>
                    <input type="text" class="form-control" placeholder="" id ="dateOfPublished" value="">
                </div>
            </div></br>

            <div class="float-right">
                 
                <button type="button" class="btn btn-outline-danger pull-right" onclick="clearField()">Reset</button>
                <button type="button" class="btn btn-outline-success pull-right" id = "edit">Edit Book</button>
            </div>
        </form>
    </div>`
