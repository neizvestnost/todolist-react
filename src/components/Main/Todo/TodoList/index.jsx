import React from 'react';
import DeleteButton from '../DeleteButton';

export default function TodoList({ data, handleActiveClick, handleTextChange, handleCancelClick }) {
  const todos = data.map(element => {
    return (
      <li key={element.position}>
        <input type='checkbox' checked={!element.active} onChange={() => handleActiveClick(element.active, element.position)} />
        <input value={element.text} onChange={event => handleTextChange(element.position, event.target.value)} />
        <DeleteButton handleDeleteClick={() => handleCancelClick(element.position)} buttonText={'X'} />
      </li>
    )
  })

  return (
    <ul>
      {todos}
    </ul>
  )
}
