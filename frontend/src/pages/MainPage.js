
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import ContactTable from '../components/ContactTable';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainPage = ()=> {
    return (
        <>

    <ContactTable />
    </>
    )
}

export default MainPage;