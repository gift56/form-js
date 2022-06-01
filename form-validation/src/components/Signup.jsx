import { useState } from 'react';

const Signup = () => {

    const [values, setValue] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form action="" className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input type="text" className="input" name="fullname" value={values.fullname} />
                    </div>
                    <div className="email">
                        <label className="label">Email Address</label>
                        <input type="email" className="input" name="email"  value={values.email}/>
                    </div>
                    <div className="password">
                        <label className="label">password</label>
                        <input type="password" className="input" name="password"  value={values.password}/>
                    </div>
                    <div>
                        <button className="submit" onClick={handleSubmit}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
