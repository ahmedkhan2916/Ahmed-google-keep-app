// import logo from './logo.svg';
import './App.css';
import  Header from "./header";
import  Footer from "./Footer";
import  Createnote from "./createNote"
import Note from "./Note";
import { useState } from 'react';

const App=()=>{

 const  [addItems,setItems]=useState([]);

  const addNote=(Note)=>{
    
    setItems((preValue)=>{
    return [...preValue,Note];

    });

    console.log(Note);
  };
  const del_func=(id)=>{
  
    setItems((oldItems)=>

    oldItems.filter((arr,index)=>{
      return index!==id;
    })


  );

  };


  return(
   <>
   <Header/>
   
   <Createnote passNote={addNote}/>
   <div className="grid">
   {addItems.map((val,index)=>{
  return(
    
   <Note
   key={index}
   id={index}
   title={val.title}
   content={val.content}
   delete={del_func}
   />

  );

   })}
   </div>
   <Footer/>
  
   </>
  );
  }
export default App;
