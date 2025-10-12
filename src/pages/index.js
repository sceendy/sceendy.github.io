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
        I am currently a senior front-end engineer on a feature team at
        Aetna.
      </p>
      <ul>
        <li>
          I'm reading "<em>Clean Code</em>", "<em>A Clash of Kings</em>", and "
          <em>grokking algorithms</em>".
        </li>
        <li>I'm listening to the "Good Hang with Amy Poehler" podcast.</li>
        <li>
          I enjoy running, traveling for food, and trying to be a better person
          everyday.
        </li>
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
    {/* <section className="home-layout__goals">
      <GoalsComponent />
    </section> */}
    <section className="home-layout__blog-list">
      <BlogArchiveComponent />
      <Link to="/blog" className="u--text-center">
        read older posts...
      </Link>
    </section>
  </Layout>
);

export default index;
