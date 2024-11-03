// src/components/Notification.js

import React from 'react';
import '../styles/styles.css';

const Notification = ({ message }) => {
    return (
        <div className="notification">
            <p>{message}</p>
        </div>
    );
};

export default Notification;
