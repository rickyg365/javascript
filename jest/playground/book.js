class Book {
    constructor(title, author, isbn) {
        this.title = title || "No Title";
        this.author = author || "No Author";
        this.isbn = isbn || 1234567890;
    }
}

// export default Book;
module.exports = Book;
