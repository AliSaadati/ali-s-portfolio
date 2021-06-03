import React, { useState, useEffect } from 'react'
import * as classes from './ContactForm.module.scss'
import axios from 'axios';

const ContactForm = (props) => {

    let [formData, setFormData] = useState({name: "", email: "", message: ""})

    let handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    let submit = async e => {
        e.preventDefault();

        let postUrl = 'https://b1qdanl7b0.execute-api.us-west-1.amazonaws.com/dev';

        let body = {
            "name": formData.name,
            "email": formData.email,
            "message": formData.message
        }
        const response = await axios.post(postUrl, body).then((res) => {
            console.log(res)
            return res;
        })

        setFormData({name: "", email: "", message: ""})

    }

    return (
        <form onSubmit={submit} className={classes.ContactForm}>
            <p><label htmlFor="name">Name: </label></p>
            <input 
                value={formData.name} 
                id="name" 
                type="text" 
                name="name" 
                onChange={handleChange}/>
            <p><label htmlFor="email">Email: </label></p>
            <input 
                value={formData.email} 
                id="email" type="email" 
                name="email" 
                onChange={handleChange}/>
            <p><label htmlFor="message">Message: </label></p>
            <textarea 
                value={formData.message} 
                id="message" 
                name="message"
                onChange={handleChange}></textarea>
            <button type="submit">Send message</button>
        </form>
    )
}

export default ContactForm;