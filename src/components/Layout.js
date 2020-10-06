import React from 'react';
import NavBar from '../components/Navbar';
function Layout(props){
    const children = props.children;
    return (
        <React.Fragment>
            <NavBar />
            {children}
        </React.Fragment>
        );
}

export default Layout;