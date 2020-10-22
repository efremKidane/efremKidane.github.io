/*eslint-disable */
let currentStudent;

function add(evt) {
    let student = library.students.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Enter Member Name first")
    }
    currentStudent = student;
    let book = library.books.get(evt.target.parentNode.value);

    currentStudent.borrowedBooks.push(book);
    selectBookToBorrow(book);

}

function selectBookToBorrow(book) {

    book.dueDate.setDate(book.dueDate.getDate() - 20);
    let date = book.dueDate;
    date.setDate(date.getDate() + book.loanDays);

    let table = document.getElementById("shopping_cart");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.isbn;
    let td2 = document.createElement("td");
    td2.innerHTML = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    let td3 = document.createElement("td");
    td3.innerHTML = book.title;
    row.append(td1);
    row.append(td2);
    row.append(td3);
    table.append(row);
}
let members = [];
function logIn() {

    members.push(new Student("John", 2006));
    members.push(new Student("Jack", 2007));
    members.push(new Student("simo", 2008));

    let name = document.getElementById('name').value;
    let memberId = +document.getElementById('memberId').value;


    for (let i = 0; i < members.length; i++) {
        if (members[i].name === name && members[i].memberId === memberId) {
            document.getElementById('name').value = '';
            document.getElementById('memberId').value = '';
            return window.location.href = "./libraryOfBooks.html";
        }
    }

    let register = confirm("do you want to register");
    if (register) {
        newName = prompt("please enter a name");
        newMemberId = +prompt("Enter new membere id please");

        members.push(new Student(newName, newMemberId));

    }
    document.getElementById('name').value = '';
    document.getElementById('memberId').value = '';
}

function pullInfo() {
    let student = library.students.get(document.getElementById("student_name").value);
    if (!student) {
        alert("Not found");
        return;
    }
     
    displayInfo();
}

function displayInfo() {
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}
        your current borrowed books are: ${currentStudent.borrowedBooks.length}`;
}

function makeBorrow() {
    if (!currentStudent) {
        alert("Please select a student first.")
        return;
    }

    alert(`Thanks you just borrowed ${currentStudent.borrowedBooks.length} books`)

    let loan = currentStudent.borrowedBooks;
    loan.forEach((books) => borrowedBooks(books));

    pullInfo();
    resetBorrowingList();
}
function resetBorrowingList() {
    let table = document.getElementById('shopping_cart');
    let rows = document.querySelectorAll('#shopping_cart>tr')
    for (let i = rows.length; i > 0; i--) {
        table.deleteRow(i);
    }
    shoppingCart = [];
}

function borrowedBooks(books) {

    books.dueDate.setDate(books.dueDate.getDate() - 20);
    let date = books.dueDate;
    date.setDate(date.getDate() + books.loanDays);
    let returns = new Date();
    let price;
    if (returns.getDate() <= date.getDate() && returns.getMonth() <= date.getMonth() && returns.getFullYear() <= date.getFullYear()) {
        price = 0;
    }
    else {
        price = ((returns.getDate() - date.getDate()) + (returns.getMonth() - date.getMonth()) * 30 +
            (returns.getFullYear() - date.getFullYear()) * 365) * books.rate;
        if (price > books.maxCharge) {
            price = books.maxCharge;
        }
        else price = price;
    }

    let table = document.getElementById("borrowed-books");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = books.isbn;
    let td2 = document.createElement("td");
    td2.innerHTML = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();;
    let td3 = document.createElement("td");
    td3.innerHTML = returns.getMonth() + 1 + "/" + returns.getDate() + "/" + returns.getFullYear();
    let td4 = document.createElement("td");
    td4.innerHTML = price;

    row.append(td1);
    row.append(td2);
    row.append(td3);
    row.append(td4)
    table.append(row);
}

function returnBorrowedBooks() {
    let table = document.getElementById('borrowed-books');
    let rows = document.querySelectorAll('#borrowed-books>tr')
    for (let i = rows.length; i > 0; i--) {
        table.deleteRow(i);
    }
    shoppingCart = [];
}