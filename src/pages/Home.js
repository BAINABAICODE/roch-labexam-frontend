// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import Notification from '../components/Notification';
import '../styles/styles.css';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [notification, setNotification] = useState('');

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/books/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete book');
            setNotification('Book deleted successfully!');
            fetchBooks();
            setTimeout(() => {
                setNotification('');
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="home-container">
            <h1>Book Management System</h1>
            {notification && <Notification message={notification} />}
            <BookList books={books} onDelete={handleDelete} />
        </div>
    );
};

export default Home;
