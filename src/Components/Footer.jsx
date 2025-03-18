import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <footer className="footer">
                <h4>© {new Date().getFullYear()} If this site breaks, I was never here. 🚀</h4>
            </footer>
        );
    }
}

export default Contact;