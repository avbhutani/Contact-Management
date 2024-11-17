// import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {Route, Routes, useNavigate, useParams} from 'react-router-dom'
import './UpdatePage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePage = (props)=> {
    // const id = useParams()

    // can be a possible solution for overlaying the component and not making a separate page for it.
    const id = props.id
    console.log('Check here')
    console.log(id)
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
            if(!firstName || !email) {
                toast('Email or First Name cant be empty')
                console.log("here")
                throw new Error;
            
                return
            }
            const response = await axios.put(`http://localhost:4000/contacts/${id}`,{
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        })
        console.log(response)
        toast('Contact Updated Successfully!')
    }
        catch(error) {
            toast('Error Updating Contact')
            console.log(error)
        }
    }
    return(
        <>
        <ToastContainer />
        <form className='update-form'>
            <TextField onChange={(e)=> setFirstName(e.target.value)} id="outlined-basic" label="First Name" variant="outlined" />
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