import Book from "./Book.js";
import EBook from "./EBook.js";

const books = [
    new Book("City of girl", "Elizabeth Gilbert", 2019),
    new Book("Harry Potter", "J.K Rowling", 1997),
    new Book("Flowers for Algernon", "Daniel Keyes", 1966),
    new EBook("Normal People", " Sally Rooney", 2018, "PDF")
]

for (const book of books) {
    console.log(book.printInfo())
}

const oldestBook = Book.findOldestBook(books);

console.log(`Oldest book: ${oldestBook.printInfo()}`)

const eBook = EBook.fromBook(books[0],"txt")
console.log(`New eBook: ${eBook.printInfo()}`)