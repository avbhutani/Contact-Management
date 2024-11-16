import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const navigate = useNavigate()
    // Fetch contacts
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
            alert('Contact deleted successfully');
            fetchContacts(); // Refresh the contact list
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };
    const updateContact = async (id) => {
        try {
            navigate(`/contacts/${id}`)
            
        } catch (error) {
            console.log('Error Updating Contact',error)
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
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
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.company}</td>
                            <td>{contact.jobTitle}</td>
                            <td>
                                <button onClick={() => deleteContact(contact._id)}>Delete</button>
                            <button onClick={() => updateContact(contact._id)}>Update</button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactTable;
