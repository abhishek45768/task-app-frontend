import React from 'react';
import NoteCard from './NoteCard';
import './NotesList.css';

function NotesList({ notes, onDeleteNote, onEditNote }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            onDelete={() => onDeleteNote(index)}
            onEdit={() => onEditNote(index)}
          />
        ))
      ) : (
        <p className="no-notes">No notes available. Click "Add New Note" to get started!</p>
      )}
    </div>
  );
}

export default NotesList;
