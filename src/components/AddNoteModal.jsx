import React, { useState, useEffect } from 'react';
import './AddNoteModal.css';

function AddNoteModal({ onClose, onSave, note }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSave({ title, content });
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{note ? 'Edit Note' : 'Add Note'}</h2>
        <input
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="modal-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;
