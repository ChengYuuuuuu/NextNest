import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import { BuybackProvider } from './context/BuybackContext';

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><BuybackProvider><App /></BuybackProvider></BrowserRouter></React.StrictMode>);
