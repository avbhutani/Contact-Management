// import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'

const CreatePage = ()=> {
    const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [company,setCompany] = useState('')
  const [jobTitle,setJobTitle] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  async function createContact(event) {
    event.preventDefault()
    try {
      const response = await axios.post('http://localhost:4000/contacts',{
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        jobTitle,
        message
      })
      console.log(response)
      
      setMessage(`Created Contact Successfully!`)
      window.location.href = '/'
    } catch (error) {
      console.log(`Error creating Contact!`,error)
      setMessage(`One or more fields are empty!`)
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
      <Button type='submit' variant="contained" onClick={createContact}>Create Contact</Button>
    </form>
        </>
    )
}


export default CreatePage;