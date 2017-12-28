import React from 'react';
import Link from 'gatsby-link';
import BlogArchiveComponent from './blog';

// ASSETS
import selfImage from '../assets/me-stretching.jpg';
import smallSelfImage from '../assets/cindy.jpg';
import amsImage from '../assets/ams.png';
import foundryImage from '../assets/foundry.png';
import shopImage from '../assets/pa-game-news.png';
import resume from '../assets/web-resume.pdf';

const IndexPage = ({data}) => (
  <div>
    <div className='grid--two'>
      <div className='grid__image'>
        <img src={selfImage} alt='me stretching' />
      </div>
      <div>
        <header className='u--media-center u--text-center'>
          <h1>Hi, I’m Cindy!</h1>
          <h2>I'm a front-end engineer in Texas.</h2>
        </header>
        <p>I love building empowering, functional, efficient, and thoughtfully designed web applications. I love JavaScript and tend to work remotely most days.</p>
        <p>There are some great engineers that I have worked with and learned a lot from over the past few years. They have some <a href='https://www.linkedin.com/in/sceendy#recommendations' target='_blank' rel='noopener'>good things to say about me</a>.</p>
        <p>I live in Austin with my husband and dog. I enjoy running, drinking coffee, eating waffles, and traveling.</p>
        <a href={resume} className='btn u--float-right' target='_blank'>View Resume (.pdf)</a>
      </div>
    </div>

    <h3>recent work</h3>
    <div className='grid--three'>
      <figure>
        <img
        src={amsImage}
        className='figure__image'
        alt="Screenshot of AMS" />	
        <figcaption>
          <a href='https://ams.kalkomey.com/' target='_blank' rel='noopener'>Agency Management Solution</a><br/>
          <small>SCSS, JavaScript, Ruby on Rails</small>
          <p>A product suite that provides tools for clients to manage their content, users, and products.</p>
        </figcaption>
      </figure>
      <figure>
        <img
        src={shopImage}
        className='figure__image'
        alt="Screenshot of PA Game news" />	
        <figcaption>
          <a href='https://pennsylvaniagamenews.com/' target='_blank' rel='noopener'>Kalkomey Outdoor Shop</a><br/>
          <small>SCSS, Angular/TypeScript, Node.js</small>
          <p>A customizable storefront for users to purchase products and manage their account.</p>
        </figcaption>
      </figure>
      <figure>
        <img
        src={foundryImage}
        className='figure__image'
        alt="Screenshot of Foundry" />	
        <figcaption>
        <a href='https://kalkomey.com/' target='_blank' rel='noopener'>Foundry CMS</a><br/>
          <small>SCSS, AngularJS, Ruby on Rails</small>
          <p>An internal content management system for online outdoor recreational safety courses.</p>
        </figcaption>
      </figure>
    </div>

    <div className='grid--sidebar-layout'>
      <div>
        <BlogArchiveComponent data={data} />
        <div className='u--text-center'>
          <Link to='/blog'>older posts...</Link>
        </div>
      </div>
      <div>
        <h3>other profiles</h3>
        <img 
        src={smallSelfImage} 
        alt='me w/sunglasses' 
        className='u--media-center' />
        <ul className='list--no-style u--text-center'>
          <li>
            <a href="http://jsfiddle.net/user/sceendy/fiddles/" target='_blank' rel='noopener'>JSFiddle</a> 
          </li>
          <li>
            <a href="https://github.com/sceendy" target='_blank' rel='noopener'>Github</a>
          </li>
          <li>
            <a href="http://codepen.io/sceendy/" target='_blank' rel='noopener'>CodePen</a>
          </li>
          <li>
            <a href="https://bumpers.fm/u/cindy" target='_blank' rel='noopener'>Bumpers</a>
          </li>
          <li>
            <a href="http://dribbble.com/sceendy" target='_blank' rel='noopener'>Dribbble</a> 
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

export const query = graphql`
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