import './App.css';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import ComboBox from './page3';
import Detail from "./page4";
import { Switch } from '@mui/material';
import Footer from './Footer';
import { Home, HomeMax } from '@mui/icons-material';

function App() {
  return (
   <div> 
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/combobox" element={<ComboBox />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Dashboard/>}/>
        

      </Routes>
     
     </div>
  );
}

export default App;
