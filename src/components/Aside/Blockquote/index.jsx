import React from 'react';

export default function Blockquote() {
  const text = 'React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.'
  return (
    <blockquote>
      <p>
        {text}
      </p>
      <footer>
        <a href='http://facebook.github.io/react'>React</a>
      </footer>
    </blockquote>
  )
}
