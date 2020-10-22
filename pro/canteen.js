class ApplicationError extends Error { };


class Student {
    constructor(name,memberId) {
        this._name = name;
         this._memberId = memberId;
         this.borrowedBooks = [];
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get memberId(){
        return this._memberId;
    }

    set memberId(memberId){
        this._memberId = memberId;
    }

    borrowBook(){

    }

   
}


class Books {
    constructor(title, author ,isbn,loanDays, rate, maxCharge) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.dueDate = new Date() 
        this.loanDays = loanDays; 
        this.rate = rate;
        this.maxCharge = maxCharge; 
    }
}


class Library {
    constructor(books, students) {
        this.books = books;
        this.students = students;
    }

    addBook(newBook) {
        this.books.set(newBook.name, newBook);
    }

    addStudent(newStudent) {
        this.students.set(newStudent.name, newStudent);
    }
}

const books = new Map();
books.set("book1", new Books("WHERE THE COWARDS SING", "DELIA OWNS", 234252627272, 14, 0.5, 20));
books.set("book2", new Books("MUSCLE", "ALAN TROTER", 234252627272, 21, 0.6, 25));
books.set("book3", new Books("TURN WASTE INTO WEALTH", "MARK C.DELUZIO",234252627272, 7, 0.7, 15));
books.set("book4", new Books("THE SILENT WIDOW", "SIDNEY SHELDON", 234252627272, 10, 0.8, 10));

const students = new Map();
students.set("John", new Student("John", 2006));

const library = new Library(books, students);
library.addStudent(new Student("Jack", 2007));

