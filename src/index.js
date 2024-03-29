import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.render(
//      <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//     </BrowserRouter>,
// document.getElementById('root')
// );

const root = document.getElementById('root');
const rootRenderer = ReactDOM.createRoot(root);
rootRenderer.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
