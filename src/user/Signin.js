//Signin Component
import React, { useState } from 'react';    //use react hook
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin, authenticate, isAuthenticated } from '../auth/Auth';

const Signin = () => {

    // javascript functions
    // create a state
    const [values, setValues] = useState({
        email: 'chikmatthew@gmail.com',
        password: 'password',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const {email, password, error, loading, redirectToReferrer} = values;   //object destructing
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})   //update State
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });   //update info to values object with 'error' and 'loading'
        signin({email, password})    //from Auth.js
        .then(data => {
            if(data.error) {
                console.log(data.error);
                setValues({...values, error: data.error, loading: false})
            } else {
                authenticate(data, () => {   
                    setValues({
                        ...values,               
                        redirectToReferrer: true
                    });
                });
            }
        });
    };
    // component functions
    const signUpForm = () => (
        <form>
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

    const showLoading = () => (
        loading && <div className="alert alert-info">
           <h2>Loading ...</h2>
        </div>
    );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />  // redirect to Admin dashboard
            }  else {
                return <Redirect to="/users/dashboard" />  // redirect to users dashboard  
            } 
        }
    }

    // pass title, description and className into props to Layout 
    return (
        <Layout 
            title="SignIn" 
            description="Sign in to Node React E-Commerce App"
            className="container col-md-8 offset-md-2"
            >
            {showLoading()}
            {showError()}
            {signUpForm()}
            {redirectUser()}
        </Layout>
    )
};

export default Signin;
