import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';


function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);

  const handleAddNote = () => {
    setIsModalOpen(true);
    setEditingNoteIndex(null);
  };

  const handleSaveNote = (note) => {
    if (editingNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editingNoteIndex] = note;
      setNotes(updatedNotes);
    } else {
      setNotes([...notes, note]);
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setEditingNoteIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header onAddNote={handleAddNote} />
      <NotesList
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onEditNote={handleEditNote}
      />
      {isModalOpen && (
        <AddNoteModal
          onClose={closeModal}
          onSave={handleSaveNote}
          note={editingNoteIndex !== null ? notes[editingNoteIndex] : null}
        />
      )}
    </div>
  );
}

export default App;
