import React from 'react';
import LazyLoad from 'react-lazyload';
import { StaticQuery, Link, graphql } from 'gatsby';
import Layout from '../components/index.js';

import BlogArchiveComponent from './blog';

// ASSETS
import selfImage from '../assets/me-stretching.jpg';
import smallSelfImage from '../assets/cindy.jpg';

import resume from '../assets/web-resume.pdf';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [fields___date] }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
                date(formatString: "MMM DD")
                year
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout footer={true}>
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
            <p>I'm currently an Austin-based, remote front-end engineer at a healthcare company. Sometimes I write JS tutorials, about something new I'm trying, and tips on working remotely.</p>
            <p>I enjoy running, learning, cruising on my penny board, playing video games, and traveling.</p>
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
          <div className='home-layout__sidebar u--text-center'>
            <h2>Other Links</h2>
            <LazyLoad height={144}>
              <img 
              src={smallSelfImage}
              alt='me in Naples, Italy' 
              className='u--media-center' />
            </LazyLoad>
            <ul className='list--no-style'>
              <li>
                <a href="https://jsfiddle.net/user/sceendy/fiddles/" target='_blank' rel='noopener noreferrer'>JSFiddle</a> 
              </li>
              <li>
                <a href="https://github.com/sceendy" target='_blank' rel='noopener noreferrer'>Github</a>
              </li>
              <li>
                <a href="https://codepen.io/sceendy/" target='_blank' rel='noopener noreferrer'>CodePen</a>
              </li>
              <li>
                <a href="https://dribbble.com/sceendy" target='_blank' rel='noopener noreferrer'>Dribbble</a> 
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sceendy" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
              </li>
            </ul>
            <p><strong>Side Projects</strong>: <br/>
              <a href="https://atxpawfinder.com" target='_blank' rel='noopener noreferrer'>ATX Paw Finder</a>
            </p>
          </div>
        </div>
      </Layout>
    )}
  />
);

export default IndexPage;