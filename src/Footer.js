import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const Footer=()=>{

    let date=new Date().getFullYear();
    return(
    <>
    <div className="footer-container">
     <h1 className="Time"><span>&copy;</span>{date}</h1>
    </div>

    </>


    );



}
export default Footer;