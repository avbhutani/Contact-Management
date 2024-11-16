// import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'

const UpdatePage = ()=> {
    const id = useParams()
    const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [company,setCompany] = useState('')
  const [jobTitle,setJobTitle] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  
    async function updateContact(event) 
    {
        event.preventDefault()
        try{
            const response = await axios.put(`http://localhost:4000/contacts/${id}`,{
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        })
        console.log(response)
        navigate('/')}
        catch(error) {
            console.log(error)
        }
    }
    return(
        <>
        <form>
      <TextField  onChange={(e)=> setFirstName(e.target.value)} id="outlined-basic" label="First Name" variant="outlined" />
      <TextField onChange={(e)=> setLastName(e.target.value)} id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
      <TextField onChange={(e)=> setPhoneNumber(e.target.value)} id="outlined-basic" label="Phone Number" variant="outlined" />
      <TextField onChange={(e)=> setCompany(e.target.value)} id="outlined-basic" label="Company" variant="outlined" />
      <TextField onChange={(e)=> setJobTitle(e.target.value)} id="outlined-basic" label="Job Title" variant="outlined" />
      <Button type='submit' variant="contained" onClick={updateContact}>Update Contact</Button>
    </form>
        </>
    )
}


export default UpdatePage;