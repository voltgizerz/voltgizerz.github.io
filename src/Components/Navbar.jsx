import React, { useState, useEffect, useRef } from 'react';
import './css/Main.css';

// Function to generate a random string for the ID
const generateRandomString = (length = 12) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const Navbar = () => {
  const [quote, setQuote] = useState('Loading quote...');
  const [randomId] = useState(generateRandomString()); // Random ID for navbar
  const quoteRef = useRef(null);

  const quotes = [
    '“Talk is cheap. Show me the code.” ― Linus Torvalds',
    '“Programs must be written for people to read, and only incidentally for machines to execute.” ― Harold Abelson',
    '“The only way to learn a new programming language is by writing programs in it.” ― Dennis Ritchie',
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” ― Martin Fowler',
    '“Code is like humor. When you have to explain it, it’s bad.” ― Cory House',
    '“Before software can be reusable it first has to be usable.” ― Ralph Johnson'
  ];

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    setQuote(getRandomQuote());

    const intervalId = setInterval(() => {
      setQuote(getRandomQuote());
    }, 60000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <nav id={randomId} className="navbar">
      <a href="#home" ref={quoteRef} aria-label="Random programming quote">
        {quote}
      </a>
    </nav>
  );
};

export default Navbar;