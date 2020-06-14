import React from 'react';
import { Link } from "react-router-dom";

export default function Footer({ itemsLeft, todoListLength, deleteCompleted, completedTodos }) {
  const idsToDelete = completedTodos.map(todo => todo.position);
  return (
    <footer>
      <span>{itemsLeft} items Left</span>
      <Link to='/'>All</Link>
      <Link to='/active'>Active</Link>
      <Link to='/complete'>Complete</Link>
      {todoListLength > itemsLeft ? <button onClick={(e) => deleteCompleted(idsToDelete)}>Clear Completed</button> : ''}
    </footer>
  )
}
