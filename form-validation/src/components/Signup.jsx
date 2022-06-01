import { useState } from 'react';

const Signup = () => {

    const [value, setValue] = useState({
        
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
                        <input type="text" className="input" name="fullname" />
                    </div>
                    <div className="email">
                        <label className="label">Email Address</label>
                        <input type="email" className="input" name="email" />
                    </div>
                    <div className="password">
                        <label className="label">password</label>
                        <input type="password" className="input" name="password" />
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
