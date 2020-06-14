import React from 'react';

export default function Links({ data: { title, link, secondLink, demo, source } }) {
  const secondLinkElement = <a href={secondLink}>{source}</a>

  return (
    <>
      <h5>{title}</h5>
      <a href={link}>{demo}</a>,
      {secondLink && secondLinkElement}
    </>
  )
}
