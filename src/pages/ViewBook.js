import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const ViewBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/books/${id}`);
                if (!response.ok) throw new Error('Failed to fetch book');
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div className="details-container">
            <h1>Book Details</h1>
            <div className="details">
                <div className="detail-item"><strong>Title:</strong> {book.title}</div>
                <div className="detail-item"><strong>Author:</strong> {book.author}</div>
                <div className="detail-item"><strong>Published Year:</strong> {book.published_year}</div>
                <div className="detail-item"><strong>Genre:</strong> {book.genre}</div>
                <div className="detail-item"><strong>Description:</strong> {book.description}</div>
            </div>
            <button className="back-button" onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
};

export default ViewBook;
