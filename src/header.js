import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import keep from './images/keep.jpg';
const Header=()=>{

   return(
   <>
   <div className="container-header">
   <img alt="keep" src={keep} ></img>
   <h1 className="heading-ahmed">Ahmed Notes</h1>
 </div>
   </>


    );



}
export default Header;