import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
