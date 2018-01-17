import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'gatsby-link';
import BlogArchiveComponent from './blog';

// ASSETS
import selfImage from '../assets/me-stretching.jpg';
import smallSelfImage from '../assets/cindy.jpg';

import amsImage from '../assets/ams.png';
import amsWebImage from '../assets/ams.webp';

import foundryImage from '../assets/foundry.png';
import foundryWebImage from '../assets/foundry.webp';

import shopWebImage from '../assets/licensing.webp';
import shopImage from '../assets/licensing.png';

import resume from '../assets/web-resume.pdf';

const IndexPage = ({data}) => (
  <div>
    <div className='grid--two'>
      <div className='grid__image'>
        <LazyLoad height={312}>
          <img src={selfImage} alt='me stretching' />
        </LazyLoad>
      </div>
      <div>
        <header className='u--media-center u--text-center'>
          <h1>Hi, I’m Cindy!</h1>
          <h2>I'm a front-end developer.</h2>
        </header>
        <p>I love building empowering, functional, efficient and thoughtfully designed web applications.</p>
        <p>I have worked with great engineers over the past few years that have some <a href='https://www.linkedin.com/in/sceendy#recommendations' target='_blank' rel='noopener'>good things to say about me</a>.</p>
        <p>I live in Austin, TX and I enjoy running, drinking coffee, eating waffles, and traveling.</p>
        <a href={resume} className='btn u--float-right' target='_blank' title='Resume pdf'>View Resume (.pdf)</a>
      </div>
    </div>

    <h3>recent work</h3>
    <div className='grid--three'>
      <figure>
        <LazyLoad height={150}>
          <picture>
            <source srcSet={amsWebImage} type="image/webp" />
            <source srcSet={amsImage} type="image/png" /> 
            <img
              src={amsImage}
              className='figure__image'
              alt="Screenshot of AMS"
            />
          </picture>
        </LazyLoad>
        <figcaption>
          <a href='https://ams.kalkomey.com/' target='_blank' rel='noopener' title='AMS marketing page; product requires login'>Agency Management Solutions</a><br/>
          <small>JavaScript (ES2015+), Ruby on Rails</small>
          <p>A product suite that provides tools for Kalkomey clients to manage their content and users.</p>
        </figcaption>
      </figure>
      <figure>
        <LazyLoad height={150}>
          <picture>
            <source srcSet={shopWebImage} type="image/webp" />
            <source srcSet={shopImage} type="image/png" /> 
            <img
              src={shopImage}
              className='figure__image'
              alt="Screenshot of Neveda Depart of Wildlife Licensing website"
            />
          </picture>
        </LazyLoad>
        <figcaption>
          Storefront Platform: <a href='https://ndowlicensing.com/' target='_blank' rel='noopener' title='NDOW Licensing Site'>NV</a>, <a href='https://pennsylvaniagamenews.com/' target='_blank' rel='noopener' title='Pennsylvania Magazine Subscription Site'>PA</a><br/>
          <small>Angular/TypeScript, Node/Express</small>
          <p>A customizable e-commerce platform for licensing products managed by state agencies.</p>
        </figcaption>
      </figure>
      <figure>
        <LazyLoad height={150}>
          <picture>
            <source srcSet={foundryWebImage} type="image/webp" />
            <source srcSet={foundryImage} type="image/png" /> 
            <img
              src={foundryImage}
              className='figure__image'
              alt="Screenshot of Foundry"
            />
          </picture>
        </LazyLoad>
        <figcaption>
        <a href='https://kalkomey.com/' target='_blank' rel='noopener' title='Kalkomey marketing website; Foundry requires a login'>Foundry CMS</a><br/>
          <small>Bootstrap, AngularJS, Ruby on Rails</small>
          <p>An internal content/learning management system for online safety education courses.</p>
        </figcaption>
      </figure>
    </div>

    <div className='grid--sidebar-layout'>
      <div>
        <BlogArchiveComponent data={data} />
        <div className='u--text-center'>
          <Link to='/blog'>read older posts...</Link>
        </div>
      </div>
      <div>
        <h3>find me on</h3>
        <LazyLoad height={162}>
          <img 
          src={smallSelfImage} 
          alt='me w/sunglasses' 
          className='u--media-center' />
        </LazyLoad>
        <ul className='list--no-style u--text-center'>
          <li>
            <a href="https://jsfiddle.net/user/sceendy/fiddles/" target='_blank' rel='noopener'>JSFiddle</a> 
          </li>
          <li>
            <a href="https://github.com/sceendy" target='_blank' rel='noopener'>Github</a>
          </li>
          <li>
            <a href="https://codepen.io/sceendy/" target='_blank' rel='noopener'>CodePen</a>
          </li>
          <li>
            <a href="https://dribbble.com/sceendy" target='_blank' rel='noopener'>Dribbble</a> 
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sceendy" target='_blank' rel='noopener'>LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default IndexPage;

export const indexQuery = graphql`
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
`;