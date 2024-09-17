import React, { useState, useEffect } from 'react';
import './AddTaskModal.css';

function AddtaskModal({ onClose, onSave, task }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setContent(task.content);
    }
  }, [task]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSave({ title, content });
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
        <input
          type="text"
          placeholder="Enter Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Task content"
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

export default AddtaskModal;
