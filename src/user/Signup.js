//Signup Component
import React, { useState } from 'react';    //use react hook
import Layout from '../core/Layout';
import { API } from '../config';

const Signup = () => {
    // create a state
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
    // pass title, description and className into props to Layout 
    return (
        <Layout 
            title="SignUp" 
            description="Signup to Node React E-Commerce App"
            className="container col-md-8 offset-md-2"
            >
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    )
};

export default Signup;
