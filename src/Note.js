import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';




const Note=(props)=>{

    const Note_del=()=>{
    props.delete(props.id);


    }
    return(
        <>
    <div className="Note">
    <h2>{props.title}</h2>
   <br/>
   <p>{props.content}</p>
   <button onClick={Note_del} className="btn-2">-</button>
    </div>
    
    </>
    );

    
}

export default Note;