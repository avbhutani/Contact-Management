import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdatePage from '../pages/UpdatePage';
import './ContactTable.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [rowId,setRowId] = useState(null)

    const navigate = useNavigate()

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/contacts');
            setContacts(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const deleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/contacts/${id}`);
            // alert('Contact deleted successfully');
            toast('Contact Deleted Successfully!')
            fetchContacts(); 
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };
    const updateContact = async (id) => {
        try {
            setRowId(id)
            fetchContacts()
        } catch (error) {
            console.log('Error Updating Contact',error)
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <ToastContainer />
            <h1>Contact List</h1>
            <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr
                            key={contact._id}
                            onClick={() => setSelectedContact(contact._id)}
                            style={{
                                backgroundColor: selectedContact === contact._id ? '#f0f0f0' : 'white',
                                cursor: 'pointer',
                            }}
                        >
                            <td>{contact.firstName  || 'N/A'}</td>
                            <td>{contact.lastName  || 'N/A'}</td>
                            <td>{contact.email || 'N/A'}</td>
                            <td>{contact.phoneNumber || 'N/A'}</td>
                            <td>{contact.company || 'N/A'}</td>
                            <td>{contact.jobTitle}</td>
                            <td>
                                <button onClick={() => deleteContact(contact._id)}>Delete</button>
                                <button onClick={() => updateContact(contact._id)}>Update</button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            {rowId ? <UpdatePage id={rowId}/> : <></>}
        </div>
    );
};

export default ContactTable;
