// Define your Book class here:
class Book{
    constructor(title, author, copyright, isbn, pages, checkOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.checkOut = checkOut;
        this.discarded = discarded
    }
    checkOut(uses = 1){
        this.checkOut += uses
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyright, isbn, pages, checkOut, discarded){
        super(title, author, copyright, isbn, pages, checkOut, discarded)
    }
    remove(copyright){
        if(2024-copyright > 5){
            return discarded = true
        }
        else{
            return "Book is kept"
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyright, isbn, pages, checkOut, discarded){
        super(title, author, copyright, isbn, pages, checkOut, discarded)
    }
    remove(copyright){
        if(2024-copyright > 5){
            return discarded = true
        }
        else{
            return "Book is kept"
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let pride = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, false)
let ship = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, false)

// Code exercises 4 & 5 here:
console.log(pride.remove())
console.log(ship.remove())
