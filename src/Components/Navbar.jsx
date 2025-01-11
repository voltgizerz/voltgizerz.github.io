import React, { Component } from 'react'
import './css/Main.css'

class Navbar extends Component {
    constructor() {
        super();
        this.quotes = [
            "“Talk is cheap. Show me the code.” ― Linus Torvalds",
            "“Programs must be written for people to read, and only incidentally for machines to execute.” ― Harold Abelson",
            "“The only way to learn a new programming language is by writing programs in it.” ― Dennis Ritchie",
            "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” ― Martin Fowler",
            "“Code is like humor. When you have to explain it, it’s bad.” ― Cory House",
            "“Before software can be reusable it first has to be usable.” ― Ralph Johnson"
        ];
    }

    getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }

    render() {
        return (
            <nav className="navbar">
                <a href="#home">{this.getRandomQuote()}</a>
            </nav>
        );
    }
}

export default Navbar;

