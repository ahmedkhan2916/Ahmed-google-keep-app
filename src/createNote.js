import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const Createnote=(props)=>{
const [Note,setNote]=useState({
 title:"",
 content:"",
});
const [hide,setHide]=useState(true);

const setValue=(event)=>{

    const {name,value}=event.target;
setNote((preValue)=>{

  return {
      ...preValue,
      [name]:value,
  };
});

console.log(Note);
};
const addEvent=()=>{

props.passNote(Note);
setNote({
    title:"",
    content:"",
});


};
const hide_fun=()=>{
    if(hide==false)
    {
        setHide(true);
    }
    else{
        setHide(false);
    }
 
 
   }

return(
 <> 
 <div className = "createNOte">
     <div className="card">
     <form>
         {
             hide?
         <input type="text" value={Note.title} placeholder="Title" onChange={setValue} name="title" />
:null}
         
        <textarea rows="10" column="19" placeholder="Write a note....." className="text" onChange={setValue} value={Note.content} name="content" onDoubleClick={hide_fun}></textarea>
        <div className="btn-container">
         <button className="btn-1" onClick={addEvent} type="button">+</button>
         </div>
     </form>
     </div>
 </div>
 </>

);
}

export default Createnote;
