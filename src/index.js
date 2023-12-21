import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Calculator from './components/calculator/Calculator';
import Display from './components/display/Display';
import Summary from './components/summary/Summary';
import ParentToChild from './components/lesson7/ParentToChild';
import ChildToParent from './components/lesson7/ChildToParent';
import ChildToChild from './components/lesson7/ChildToChild';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App />
    // <ParentToChild/>
    // <ChildToParent/>
    <ChildToChild/>
    
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

