import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <footer className="footer">
                <h4>© {new Date().getFullYear()} Made with ❤️ by Felix Fernando Wijaya.</h4>
            </footer>
        );
    }
}

export default Contact;