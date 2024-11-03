// src/components/BookList.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

// Import Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const BookList = ({ books, onDelete }) => {
    return (
        <div className="book-list-container">
            <div className="header-container">
                <Link to="/add" className="button button-add">Add New Book</Link>
            </div>
            <table className="book-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td className="action-buttons">
                                <Link to={`/view/${book.id}`} className="button button-view" title="View">
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                                <Link to={`/edit/${book.id}`} className="button button-edit" title="Edit">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <button onClick={() => onDelete(book.id)} className="button button-delete" title="Delete">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
