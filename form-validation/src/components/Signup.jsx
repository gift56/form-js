import React from "react";
import Useform from "./Useform";

const Signup = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = Useform(submitForm);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form action="" className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input type="text" className="input" name="fullname" value={values.fullname} onChange={handleChange} />
                        {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>
                    <div className="email">
                        <label className="label">Email Address</label>
                        <input type="email" className="input" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">password</label>
                        <input type="password" className="input" name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
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
