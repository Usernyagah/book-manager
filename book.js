const {connectToDatabase} = require('./db');
const { ObjectId } = require('mongodb');

async function addBooks(Book) {
    const books = await connectToDatabase();
    const result = await books.insertOne(Book);
    console.log("Book added:", result.insertedId);
}

async function getBooks() {
    const books = await connectToDatabase();
    const result = await books.find().toArray();
    console.log("Books retrieved:", result);
}


async function updateBook(id, updatedBook) {
    const books = await connectToDatabase();
    const result = await books.updateOne(
        { _id: ObjectId(id) },
        { $set: updatedBook }
    );
    console.log("Book updated:", result.modifiedCount);
}

async function deleteBook(id) {
    const books = await connectToDatabase();
    const result = await books.deleteOne({ _id: ObjectId(id) });
    console.log("Book deleted:", result.deletedCount);
}

module.exports = {
    addBooks,
    getBooks,
    updateBook,
    deleteBook
};
