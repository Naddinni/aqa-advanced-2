import Book from "./Book.js";

export default class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this._fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFileFormat) {
        if (typeof newFileFormat === 'string' && newFileFormat.length > 0) {
            this._fileFormat = newFileFormat;
        } else {
            console.error('Please check the book file format');
        }
    }

    static fromBook(book, fileFormat) {
       return new EBook(book.name, book.author, book.year, fileFormat);
    }

    printInfo() {
        return `Book name: ${this._name} --- Author: ${this._author} --- Publication date: ${this._year} --- File format: ${this._fileFormat}`
    }
}



