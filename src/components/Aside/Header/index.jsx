import React from 'react';
import Links from './Links';

export default function Header() {
  const linksAndTitles = [
    {
      title: 'Example',
      link: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react',
      demo: 'Demo'
    },
    {
      title: 'React + Backbone.js',
      link: 'http://todomvc.com/examples/react-backbone',
      secondLink: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone',
      demo: 'Demo',
      source: 'Source'
    },
    {
      title: 'Scala.js + React',
      link: 'http://todomvc.com/examples/scalajs-react',
      secondLink: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/scalajs-react',
      demo: 'Demo',
      source: 'Source'
    },
    {
      title: 'Typescript + React',
      link: 'http://todomvc.com/examples/typescript-react',
      secondLink: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react',
      demo: 'Demo',
      source: 'Source'
    },
    {
      title: 'React + Alt',
      link: 'http://todomvc.com/examples/react-alt',
      secondLink: 'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-alt',
      demo: 'Demo',
      source: 'Source'
    },
  ]

  return (
    <header>
      <h3>React</h3>
      {linksAndTitles.map(setOfData => <Links key={setOfData.title} data={setOfData} />)}
    </header>

  )
}