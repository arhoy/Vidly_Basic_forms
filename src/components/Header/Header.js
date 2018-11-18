import React, { Component } from 'react';
import Navbar from './NavBar/NavBar';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
            </React.Fragment>
        );
    }
}

export default Header;