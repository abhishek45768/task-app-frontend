import React from 'react';
import './Header.css';

function Header({ onAddNote }) {
  return (
    <header className="header">
      <h1>My Notes</h1>
      <button className="add-note-btn" onClick={onAddNote}>
        + Add New Note
      </button>
    </header>
  );
}

export default Header;
