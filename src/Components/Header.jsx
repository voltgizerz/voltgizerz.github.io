import React, { Component } from 'react';
import './css/Main.css';

class Header extends Component {
    welcomeTexts = [
        'WELCOME',               // English
        'BIENVENUE',             // French
        'WILLKOMMEN',            // German
        'ようこそ',                // Japanese
        '환영합니다',              // Korean
        'SELAMAT DATANG',        // Bahasa Indonesia / Malay
        '欢迎',                   // Simplified Chinese
        'BIENVENIDO',            // Spanish
        'BEM-VINDO',             // Portuguese (Brazil)
        'Tervetuloa',            // Finnish
        'VÄLKOMMEN',             // Swedish
        'VELKOMMEN',             // Danish / Norwegian
        'ยินดีต้อนรับ',          // Thai
      ];

    state = {
        currentTextIndex: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                currentTextIndex: (prevState.currentTextIndex + 1) % this.welcomeTexts.length,
            }));
        }, 5000); // ⏱ Change every 4 seconds (slower)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div id="animated-header">
                <h1 className="header-h1">{this.welcomeTexts[this.state.currentTextIndex]}</h1>
            </div>
        );
    }
}

export default Header;