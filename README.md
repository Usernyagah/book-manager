# Book Manager

A simple Node.js command-line application to manage a collection of books using MongoDB.

## Features

- Add a new book
- Retrieve all books
- Update a book's information
- Delete a book

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) running locally on `mongodb://localhost:27017`

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Usernyagah/book-manager
    cd book-manager
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

Run the application using Node.js with the following commands:

### Add a Book

```sh
node app.js add "<title>" "<author>" <year>
```

Example:
```sh
node app.js add "The Hobbit" "J.R.R. Tolkien" 1937
```

### Get All Books

```sh
node app.js get
```

### Update a Book

```sh
node app.js update <book_id> <field> <new_value>
```

Example:
```sh
node app.js update 60c72b2f9b1e8b3a2c8f9e7d title "The Lord of the Rings"
```

### Delete a Book

```sh
node app.js delete <book_id>
```

## Project Structure

- [`app.js`](app.js): Entry point and command-line interface
- [`book.js`](book.js): Book operations (CRUD)
- [`db.js`](db.js): MongoDB connection logic

## License

ISC
