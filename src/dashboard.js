import './dashboard.css';
import * as React from 'react';
import Footer from './Footer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import './App.css';


export default function Dashboard() {
  return (
    <div className='wh'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/login">
            <div className='red'>  
          <Button color="inherit">Login</Button>
          </div>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    <p className='title'>
      <h1 className='h1'>
      Government of Tamil Nadu
      </h1>

   <h2>This  is the portal to complain about the problems faced by the people of India with a image proof and complain history.</h2>
   <p className='p'>
   Tamil Invocation Song 

Honorable <b> Thiru R.N. Ravi</b>, Governor of Tamil Nadu is the Constitutional Head of the state.
Hon'ble Chief Minister of Tamil Nadu Thiru <b> M.K.Stalin</b> is the Head of the elected Government and heads the Council of Ministers.

Hon'ble <b> Thiru.Sanjay Vijaykumar Gangapurwala </b>, Chief Justice, Madras High Court is the Head  of Judiciary. 
   </p>
      <a href="https://www.tn.gov/content/dam/tn/attorneygeneral/documents/consumer/consumer-complaint-form.pdf"> Get pdf link</a>
      
         
    </p>
                   <Footer />
    </div>
    
  );
}



