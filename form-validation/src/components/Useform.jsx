import { useEffect, useState } from 'react';
import Validate from './Validate';

const Useform = (submitForm) => {
    const [values, setValue] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const [correctData, setCorrectdata] = useState(false);

    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setCorrectdata(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && correctData) {
            submitForm(true);
        }

    }, [errors]);

    return { handleChange, handleSubmit, errors, values };
}

export default Useform;
