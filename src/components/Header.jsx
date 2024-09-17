import React from 'react';
import './Header.css';

function Header({ onAddtask }) {
  return (
    <header className="header">
      <h1>My Task</h1>
      <button className="add-note-btn" onClick={onAddtask}>
        + Add New TASK
      </button>
    </header>
  );
}

export default Header;
