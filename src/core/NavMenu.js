import React from 'react';
/**
 * withRouter is a higher order component that will pass closest route's match, 
 * current location, and history props to the wrapped component whenever it renders. 
 * simply it connects component to the router.
 * Use Link, not necessary to reload index.html when link to other pages
 */
import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => { 
    if (history.location.pathname === path) {
        return {color: '#ff9900'};
    } else {
        return {color: '#ffffff'};
    }
}

/**
 * const Menu=(props) => ()
 * <Link className="nav-link" style={isActive(props.history, '/')} to="/">
 */

const Menu = ({history}) => (    
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">               
                <Link className="nav-link" style={isActive(history, '/')} to="/">  
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
                    SignIn
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                    SignUp
                </Link>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);