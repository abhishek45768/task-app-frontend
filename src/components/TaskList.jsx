import React from 'react';
import TaskCard from './TaskCard';
import './TaskList.css';

function TaskList({ tasks, onDeletetask, onEdittask }) {
  return (
    <div className="notes-list">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onDelete={() => onDeletetask(index)}
            onEdit={() => onEdittask(index)}
          />
        ))
      ) : (
        <p className="no-notes">No Task available. Click "Add New TASK" to get started!</p>
      )}
    </div>
  );
}

export default TaskList;
