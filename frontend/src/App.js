import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'
// import EnhancedTable from './components/ContactTable';
import ContactTable from './components/ContactTable';
import {Route, Routes, useNavigate} from 'react-router-dom'
import UpdatePage from './pages/UpdatePage';
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/contacts/:id' element={<UpdatePage />}/>
      <Route path='/contacts/create' element={<CreatePage />} />
    </Routes>
    
   
    </>
  );
}

export default App;
