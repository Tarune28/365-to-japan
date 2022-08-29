import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './shared/css/blog.css';
import './shared/css/bootstrap.css';
import './shared/css/breadcrumb.css';
// import './shared/css/flaticon.css';
import './shared/css/responsive.css';
import './shared/css/style.css';
// import './shared/css/themify-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
