import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import './navbar.css';

export default function ButtonAppBar() {
  return (


<div className='app'> 
    
      <AppBar style={{ height: '36px' }}>
        <Toolbar className='typ'>
          <Typography className='typ'variant="h4" component="div" sx={{ flexGrow: 1000}}>
          Complain Management System 
          </Typography>
          <Button color="inherit">HOME</Button>
       
        </Toolbar>
      </AppBar>
    
    </div>
    
  );
}