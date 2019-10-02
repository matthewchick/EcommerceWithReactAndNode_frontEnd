//Layout Component
import React from 'react';
import Menu from './NavMenu';
import "../styles.css";

/**
 * put title, description, className and children in the props
 * The lead class in Bootstrap is used to add emphasis to a paragraph.
 * children is children.props
 */
const Layout = ({ title = 'Title', description = "Description", className, children }) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div> 
);

export default Layout;