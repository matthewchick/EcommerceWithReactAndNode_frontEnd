//Signin Component
import React, { useState } from 'react';    //use react hook
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin } from '../auth/Auth';

const Signin = () => {

    // javascript functions
    // create a state
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const {email, password, error, loading, redirectToReferrer} = values;   //object destructing

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({email, password})
        .then(data => {
            if(data.error) {
                console.log(data.error);
                setValues({...values, error: data.error, loading: false})
            } else {
                setValues({
                    ...values,               
                    redirectToReferrer: true
                })
            }
        })
    }
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
            return <Redirect to="/" />;
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
