import React, { Component } from 'react';

export default function TodoList({data, handleActiveClick, handleTextChange, handleCancelClick }) {
  const todos = data.map(element => {
    return (
      <li key={element.position}>
        <input type='checkbox' checked={!element.active} onChange={() => handleActiveClick(element.active, element.position)} />
        <input value={element.text} onChange={event => handleTextChange(element.position, event.target.value)} />
        <input type='radio' onChange={e => handleCancelClick(element.position)} />
      </li>
    )
  })

  return (
    <ul>
      {todos}
    </ul>
  )
}
