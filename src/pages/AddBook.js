// src/pages/AddBook.js

import React from 'react';
import BookForm from '../components/BookForm';

const AddBook = () => {
    return (
        <div className="add-book-page">
            <h1>Add New Book</h1>
            <BookForm />
        </div>
    );
};

export default AddBook;