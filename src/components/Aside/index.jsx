import React from 'react';
import './style.css';
import Header from './Header';
import Blockquote from './Blockquote';
import Resources from './Resources';
export default function Aside() {

  const titleAndLinksForResources = [
    {
      mainTitle: 'Official Resoucres',
      title: 'Tutorial',
      link: "http://facebook.github.io/react/docs/tutorial.html"
    },
    {
      title: 'Philosophy',
      link: "http://www.quora.com/Pete-Hunt/Posts/React-Under-the-Hood"
    },
    {
      title: 'Support',
      link: "http://facebook.github.io/react/support.html"
    },
    {
      title: 'Flux architecture',
      link: "https://github.com/facebook/flux/tree/master/examples/flux-todomvc"
    },
  ]
  const titleAndLinksForCommunity = [
    {
      mainTitle: 'Community',
      title: 'ReactJs1',
      link: 'https://stackoverflow.com/questions/tagged/reactjs'
    },
    {
      title: 'ReactJs2',
      link: 'https://stackoverflow.com/questions/tagged/reactjs'
    },
    {
      title: 'ReactJs3',
      link: 'https://stackoverflow.com/questions/tagged/reactjs'
    }
  ]

  return (
    <aside>
      <Header />
      <hr />
      <Blockquote />
      <hr />
      <Resources data={titleAndLinksForResources} />
      <Resources data={titleAndLinksForCommunity} />
    </aside>
  )
}
