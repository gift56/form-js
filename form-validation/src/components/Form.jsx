import React, { useState } from 'react'
import Signup from './Signup';
import Successful from './Successful';

const Form = () => {
    const [formSubmitted, setFormSubmition] = useState(false);

    const submitForm = () => {
        setFormSubmition(true);
    }

    return <div> {!formSubmitted ? <Signup submitForm={submitForm} /> : <Successful />}</div>
}

export default Form
