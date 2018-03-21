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
          <h1>Hi, I’m Cindy! 👋 </h1>
        </header>
        <p>I'm a <strong>front-end engineer</strong> at a healthcare company and I work remotely <strong>from Austin, TX</strong>. I enjoy running, hiking, playing video games, and drinking coffee.</p>
        <p>I <strong>build</strong> functional, efficient, and thoughtfully designed <strong>web applications</strong>. And sometimes I write step-by-step JS tutorials and tips on working <strong>remotely</strong>.</p>
        <a
          href={resume} 
          className='btn' 
          target='_blank' 
          title='Resume PDF'
        >View Resume</a>
      </div>
    </div>

    <h2>recent work</h2>
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
          <small>JavaScript, Material, Ruby on Rails</small>
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
          Storefront Platform: <a href='http://ndowlicensing.com/' target='_blank' rel='noopener' title='NDOW Licensing Site'>NV</a>, <a href='https://pennsylvaniagamenews.com/' target='_blank' rel='noopener' title='Pennsylvania Magazine Subscription Site'>PA</a><br/>
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
          <small>AngularJS, Bootstrap, Ruby on Rails</small>
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
        <h2>find me online</h2>
        <LazyLoad height={144}>
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