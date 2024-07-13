import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Serv from './components/Serv/Serv';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home id="home" />
      <About id="about" />
      <Serv id="serv" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
