import axios from "axios"
import React, { useEffect, useState } from 'react'

const Message = () => {

    // Variables
    const [message, setMessage] = useState() 

    // Functions 
    useEffect(() => {
        axios.get(`http://localhost:8000/message`) 
            .then(response => setMessage(response.data)) 
            .catch(err => console.log(err)) 
    })

    // Return 
    return (
        <fieldset>
            <legend>Message.jsx</legend>
            <h1>Message: { message && message }</h1>
        </fieldset>
    )
}

export default Message 