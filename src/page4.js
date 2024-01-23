import react from 'react';
import { useState } from 'react';
import React, { Component } from "react";
import LocationComponent from './location';
import './page4.css';
import Footer from './Footer';
export default function Details()
{
  const createAlert=()=>{
     alert("Your Complain has been regsitered..❌");
  }
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='hh'>
          <LocationComponent/>
      <form>
        
        <label className='app1'>
          
          <div className='app'> Describe your problems </div>
            
          <input className='box'type="text" />
          <div className="App">
			        <h2 className='image'>Add Image📷 </h2>
			<input type="file" onChange={handleChange} />
			<img src={file} />
    </div>
        </label>
      </form>
      <div className='final1'>  </div>
      <button className='final' onClick={createAlert}>
                  Register your complain
      </button>
<Footer/>
      </div>
    );
  }
