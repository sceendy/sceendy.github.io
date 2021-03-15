import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import BlogArchiveComponent from './blog';

import selfImage from '../static/italy-me.jpg';
import resume from '../static/web-resume.pdf';

export default () => (
  <Layout showFooter className='home-layout__container'>
    <div className='home-layout__main-img'>
      <LazyLoad height={312}>
        <img src={selfImage} alt='me stretching' className='u--media-center' />
      </LazyLoad>
    </div>
    <section className='home-layout__about'>
      <header className='u--media-center u--text-center'>
        <h1>hi, my name is cindy <span role="img" aria-label="waving hand">👋</span></h1>
      </header>
      <p>I am a senior front-end engineer that works remotely at a big healthcare company. I enjoy building functional, efficient, and elegantly + thoughtfully designed UI's.</p>
      <p>I tend to write front-end tips, step-by-step javascript tutorials, or about working remotely. I enjoy running, reading, playing video games, and traveling for food.</p>
      <a
        href={resume} 
        className='btn' 
        target='_blank' 
        title='Resume PDF'
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>

    <section className='home-layout__blog-list'>
      <BlogArchiveComponent />
      <Link to='/blog' className='u--text-center'>read older posts...</Link>
    </section>
  </Layout>
);