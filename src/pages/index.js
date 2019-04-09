import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import BlogArchiveComponent from './blog';
import GoalsComponent from './goals';

import selfImage from '../static/me-stretching.jpg';
import resume from '../static/web-resume.pdf';

export default () => (
  <Layout showFooter={true}>
    <div className='home-layout__container'>
      <div className='home-layout__main-img'>
        <LazyLoad height={312}>
          <img src={selfImage} alt='me stretching' className='u--media-center' />
        </LazyLoad>
      </div>
      <div className='home-layout__about'>
        <header className='u--media-center u--text-center'>
          <h1>Hi, I’m Cindy! <span role="img" aria-label="waving hand">👋</span></h1>
        </header>
        <p>I am a senior front-end engineer that works remotely at a big healthcare company. I enjoy building functional, efficient, and elegantly + thoughtfully designed UI's.</p>
        <p>I tend to write about new stuff that I have learned recently, JS tutorials, and tips on working remotely. I enjoy running, reading, playing video games, and traveling.</p>
        <a
          href={resume} 
          className='btn' 
          target='_blank' 
          title='Resume PDF'
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>

      <div className='home-layout__blog-list'>
        <BlogArchiveComponent />
        <div className='u--text-center'>
          <Link to='/blog'>read older posts...</Link>
        </div>
      </div>
      <div className='home-layout__sidebar'>
        <GoalsComponent />
        <p className="u--text-center"><strong>Public Side Projects</strong>: <br/>
        <a href="https://atxpawfinder.com" target='_blank' rel='noopener noreferrer'>ATX Paw Finder</a>
        </p>
      </div>
    </div>
  </Layout>
);