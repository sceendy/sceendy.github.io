import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import BlogArchiveComponent from './blog';

import selfImage from '../static/italy-me.jpg';
import resume from '../static/web-resume.pdf';

const index = () => (
  <Layout showFooter className="home-layout__container">
    <div className="home-layout__main-img">
      <LazyLoad height={312}>
        <img src={selfImage} alt="me" className="u--media-center" />
      </LazyLoad>
    </div>
    <section className="home-layout__about">
      <header className="u--media-center u--text-center">
        <h1>
          hi, my name is cindy{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </h1>
      </header>
      <p>
        I am currently a senior front-end engineer for the core features web team at Aetna.
      </p>
      <ul>
        <li>I'm reading "Astrophysics for People in a Hurry" and "Staff Engineer: Leadership beyond the management track."</li>
        <li>I'm listening to the "Office Ladies" podcast.</li>
        <li>I enjoy traveling for food and running.</li>
      </ul>
      <a
        href={resume}
        className="btn"
        target="_blank"
        title="Resume PDF, 80kb"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </section>

    <section className="home-layout__blog-list">
      <BlogArchiveComponent />
      <Link to="/blog" className="u--text-center">
        read older posts...
      </Link>
    </section>
  </Layout>
);

export default index;
