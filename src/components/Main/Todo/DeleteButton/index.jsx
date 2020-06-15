import React from 'react';

export default function DeleteButton({ handleDeleteClick, buttonText }) {
  return (
    <button onClick={() => handleDeleteClick()}>{buttonText}</button>
  )
}
