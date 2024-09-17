import React, { useState } from 'react';
import './TaskCard.css';
import axios from 'axios'; // Import axios to make requests

function TaskCard({ task, onDelete, onEdit }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(task.completed); // Initialize with the task's completion status

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

  const toggleTaskCompletion = async () => {
    setIsCompleted(!isCompleted);
    await axios.put(`https://task-app-backend-rcpd.onrender.com/tasks/${task._id}`, {
      ...task,
      completed: !isCompleted,
    });
  };

  return (
    <div className={`task-card ${isCompleted ? 'completed' : ''}`}>
      <div className="task-header">
        <h2>{task.title}</h2>
        <div className="task-actions">
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDeleteClick}>
            Delete
          </button>
          <button className="complete-btn" onClick={toggleTaskCompletion}>
            {isCompleted ? 'Undo' : 'Completed'}
          </button>
        </div>
      </div>
      <p className="task-content-preview">
        {isCompleted ? <s>{task.content.slice(0, 100)}</s> : task.content.slice(0, 100)}...
      </p>

      {showDeleteConfirmation && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this task?</p>
          <button className="confirm-btn" onClick={confirmDelete}>
            Yes
          </button>
          <button className="cancel-btn" onClick={cancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
