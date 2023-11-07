export default class Book {
    constructor(name, author, year) {
        this._name = name
        this._author = author
        this._year = year
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.error('Please check the book name');
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string' && newAuthor.length > 0) {
            this._author = newAuthor;
        } else {
            console.error('Please check author name');
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear >= 0) {
            this._year = newYear;
        } else {
            console.error('Please check published date');
        }
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            return null;
        }

        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }

        return oldestBook;
    }
    printInfo() {
        return `Book name: ${this._name} --- Author: ${this._author} --- Publication date: ${this._year}`
    }

}



