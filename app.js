const { addBooks, getBooks, updateBook, deleteBook } = require('./book');

const command = process.argv[2];

if (command === 'add') {
    const [title, author, year] = process.argv.slice(3);
    addBooks({ title, author, year: parseInt(year) });
}
else if (command === 'get') {
    getBooks();
}
else if (command === 'update') {
    const [id,field,value] = process.argv.slice(3);
    updateBook(id, { [field]: isNaN(value) ? value : parseInt(value) });
}
else if (command === 'delete') {
    const [id] = process.argv.slice(3);
    deleteBook(id);
}
else {
    console.log("Unknown command. Use 'add', 'get', 'update', or 'delete'.");
}