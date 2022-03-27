import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DataPost = [
    {message: "Nice dic. Bro!", likeCount: "1000"},
    {message: "Thanks", likeCount: "10"}
]

ReactDOM.render(
  <React.StrictMode>
    <App data={DataPost}/>
  </React.StrictMode>,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


