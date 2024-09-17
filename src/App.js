import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import axios from 'axios'; // Axios for making API requests

function App() {
  const [task, settask] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingtaskIndex, setEditingtaskIndex] = useState(null);

  // Fetch tasks from the server on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('https://task-app-backend-rcpd.onrender.com/tasks');
      settask(response.data);
    };
    fetchTasks();
  }, []);

  const handleAddtask = () => {
    setIsModalOpen(true);
    setEditingtaskIndex(null);
  };

  const handleSavetask = async (newTask) => {
    if (editingtaskIndex !== null) {
      // Update task
      const taskToEdit = task[editingtaskIndex];
      const response = await axios.put(`https://task-app-backend-rcpd.onrender.com/tasks/${taskToEdit._id}`, newTask);
      settask((prevTasks) =>
        prevTasks.map((t, i) => (i === editingtaskIndex ? response.data : t))
      );
    } else {
      // Add new task
      const response = await axios.post('https://task-app-backend-rcpd.onrender.com/tasks', newTask);
      settask([...task, response.data]);
    }
    setIsModalOpen(false);
  };

  const handleDeletetask = async (index) => {
    const taskToDelete = task[index];
    await axios.delete(`https://task-app-backend-rcpd.onrender.com/tasks/${taskToDelete._id}`);
    settask(task.filter((_, i) => i !== index));
  };

  const handleEdittask = (index) => {
    setEditingtaskIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header onAddtask={handleAddtask} />
      <TaskList
        tasks={task}
        onDeletetask={handleDeletetask}
        onEdittask={handleEdittask}
      />
      {isModalOpen && (
        <AddTaskModal
          onClose={closeModal}
          onSave={handleSavetask}
          task={editingtaskIndex !== null ? task[editingtaskIndex] : null}
        />
      )}
    </div>
  );
}

export default App;
