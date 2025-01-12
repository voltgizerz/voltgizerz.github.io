import React, { Component } from 'react';
import './css/Main.css';

class Header extends Component {
    // Helper function to generate a random string for ID
    generateRandomId = () => {
        return 'header-' + Math.random().toString(36).substr(2, 9);
    };

    render() {
        return (
            <div id={this.generateRandomId()}>   
                <h1 className="header-h1">WELCOME</h1>
            </div>
        );
    }
}

export default Header;