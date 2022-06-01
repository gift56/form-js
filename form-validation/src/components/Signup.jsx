const Signup = () => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form action="" className="form-wrapper">
                    <div className="name">
                        <label className="label">Full Name</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="email">
                        <label className="label">Email Address</label>
                        <input type="email" className="input" />
                    </div>
                    <div className="password">
                        <label className="label">password</label>
                        <input type="password" className="input" />
                    </div>
                    <div>
                        <button className="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
