import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="name">
        <a href='#'>Amlan BG</a>
      </div>
      <div className="links">
        <h4><a href="#home" className="link">Home</a></h4>
        <h4><a href="#about" className="link">About</a></h4>
        <h4><a href="#works" className="link">Works</a></h4>
        <h4><a href="#skills" className="link">Skills</a></h4>
        <h4><a href="#blog" className="link">Blog</a></h4>
        <button href="#connect" className="linkContact">Connect</button>
      </div>
    </nav>
  );
}

export default Navbar;
