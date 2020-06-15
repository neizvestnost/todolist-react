import React from 'react';
import { Link } from "react-router-dom";
import DeleteButton from '../DeleteButton'

export default function Footer({ itemsLeft, todoListLength, deleteCompleted, completedTodos }) {
  const idsToDelete = completedTodos.map(todo => todo.position);
  return (
    <footer>
      <span>{itemsLeft} items Left</span>
      <Link to='/todo'>All</Link>
      <Link to='/todo/active'>Active</Link>
      <Link to='/todo/complete'>Complete</Link>
      {todoListLength > itemsLeft ? <DeleteButton handleDeleteClick={(e) => deleteCompleted(idsToDelete)} buttonText={'Clear Completed'} /> : ''}
    </footer>
  )
}
