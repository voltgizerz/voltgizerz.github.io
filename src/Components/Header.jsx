import React, { Component } from 'react'

import  './css/Main.css'

class Header extends Component {
    render() {
        document.title = 'Felix Fernando'
        return (
            <div id="home">   
                <h1 className="header-h1">HELLO WORLD;</h1>
            </div>
        )
    }
}

export default Header
