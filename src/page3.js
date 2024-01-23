import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Footer from './Footer';
import {Link} from "react-router-dom";
import ButtonAppBar from './navbar'
import './page3.css';

export default function ComboBox() {
  return (
    <div className='y'>
                                    
   
<div className='what'> 
   <div className='hello'> 
   <div className='h'>
    WELCOME 
   </div>
              <ButtonAppBar/>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Disaster}
      sx={{ width: 600 }}

      renderInput={(params) => <TextField {...params} label="Disaster" />}
    />
  </div>
  
 
   
  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={states}
      sx={{ width: 600 }}
      

      renderInput={(params) => <TextField {...params} label="States" />}
    />
    <Link to="/detail">
   <button type="submit" className="btn">
                  <Link to ="/dashboard">
                    </Link>
                  Submit
                </button>
                </Link>

     </div>
     </div>
   
  );
}


const Disaster = [
  { label: 'Floods' },
  { label: 'Earthquake',  },
  { label: 'Tsunami', },
  { label: 'Famine' },
  { label: 'Cyclone',  },
  { label: "Forest Fire",  },
  { label: 'Landslides' },
  {label:'Avalanche'},
   {label:'other'},
  
];
<input> Others </input>


const states =[
  {label:'Coimbatore'},
  {label:'Chennai'},
  {label:'Virudhunagar'},
  {label:'Ooty'},
  {label:'Trichy'},
  {label:'Madurai'},
  {label:'Trichy (Tiruchirappalli)'},
  {label :'Salem' },
  {label:'Tirunelveli'},
  {label:'Erode'},
  {label:'Thoothukudi'},
  {label:'Kanchipuram'}
  
];
                      <Footer/>

