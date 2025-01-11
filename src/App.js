import React from 'react';
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
  
      <Header /><hr /><br />
      <Navbar />
      <br /><br />
      <Banner /><br /><br />
      <hr />
      <Footer />
    </div>
  );
}

export default App;