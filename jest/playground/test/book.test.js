const Book = require("../book.js");
// import Book from "../book.js";

// Get types by using
// npm @types/jest --save-dev
// create jsconfig
//
// Check out these packages:
//
// - Wallaby.js
// - Cypress  -> npm install cypress -D

describe("Test Suite", () => {
    // Objects to Test
    const empty_book = new Book();

    const new_data = {
        title: "New Title",
        author: "New Author",
        isbn: 9999999999,
    };

    const test_book = new Book(new_data.title, new_data.author, new_data.isbn);
    // beforeAll(() => {
    //     test_book = new Book(new_data.title, new_data.author, new_data.isbn);
    // });

    // Book Defaults
    // it.todo("Test Book Defaults");
    it("Test book defaults", () => {
        expect(empty_book.title).toBe("No Title");
        expect(empty_book.author).toBe("No Author");
        expect(empty_book.isbn).toBe(1234567890);
    });

    // Book Title
    // it.todo("Test Book Title");
    it("Test book title", () => {
        expect(test_book.title).toBe("New Title");
    });

    // Book Author
    // it.todo("Test Book Author");
    it("Test book author", () => {
        expect(test_book.author).toBe("New Author");
    });

    // Book ISBN #
    // it.todo("Test Book ISBN");
    it("Test book isbn number", () => {
        expect(test_book.isbn).toBe(9999999999);
    });
});
