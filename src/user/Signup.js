//Signup Component
import React, { useState } from 'react';    //use react hook
import {Link} from 'react-router-dom';
import Layout from '../core/Layout';
import { API } from '../config';

const Signup = () => {

    // javascript functions
    // create a state
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const {name, email, password, error, success} = values;   //object destructing

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const signup = (user) => {
        console.log(user.name, user.email, user.password);
        // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
        return fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        })
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false});
        signup({name, email, password})
        .then(data => {
            if(data.error) {
                console.log(data.error);
                setValues({...values, error: data.error, success: false})
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                })
            }
        })
    }
    // component functions
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password}/>
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
            New account is created. Please <Link to="/signin">Sign in</Link>
        </div>
    );

    // pass title, description and className into props to Layout 
    return (
        <Layout 
            title="SignUp" 
            description="Signup to Node React E-Commerce App"
            className="container col-md-8 offset-md-2"
            >
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </Layout>
    )
};

export default Signup;
