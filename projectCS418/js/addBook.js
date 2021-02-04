// getting the values from the user input in the form for adding new book

function addBook() {
    const bookAdd = {
        isbn: document.querySelector("#isbn").value,
        title: document.querySelector("#bookTitle").value,
        overdueFee: document.querySelector("#overdueFee").value,
        publisher: document.querySelector("#publisher").value,
        datePublished: document.querySelector("#dateOfPublished").value
    };

    //validation

    function showWarning(message) {
        const div = document.createElement('div');
        div.className = ' alert alert-danger';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('form');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }

    function showSuccess(message) {
        const div = document.createElement('div');
        div.className = ' alert alert-success';
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('form');
        container.insertBefore(div, form);
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }

    if (bookAdd.isbn === '' || bookAdd.title === '' || bookAdd.overdueFee === '' || bookAdd.publisher === '' || bookAdd.datePublished === '') {
        showWarning('please fill in all fields');
    }

    else {
        async function bookToAdd(book) {

            const login_url = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add";

            const result = await fetch(login_url, {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(book)
            })
            const data = await result.json();

            clearField();
            showSuccess('book successfully added!!')
        }
        bookToAdd(bookAdd);
    }
}

function clearField() {
    document.querySelector("#isbn").value = '';
    document.querySelector("#bookTitle").value = '';
    document.querySelector("#overdueFee").value = '';
    document.querySelector("#publisher").value = '';
    document.querySelector("#dateOfPublished").value = '';
}


