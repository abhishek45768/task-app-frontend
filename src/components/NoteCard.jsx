import React, { useState } from 'react';
import './NoteCard.css';

function NoteCard({ note, onDelete, onEdit }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete();
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <h2>{note.title}</h2>
        <div className="note-actions">
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDeleteClick}>
             Delete
          </button>
        </div>
      </div>
      <p className="note-content-preview">{note.content.slice(0, 100)}...</p>
      
      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this note?</p>
          <button className="confirm-btn" onClick={confirmDelete}>Yes</button>
          <button className="cancel-btn" onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}

export default NoteCard;
