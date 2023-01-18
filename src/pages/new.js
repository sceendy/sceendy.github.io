import React from 'react';

import selfImage from '../static/italy-me.jpg';
import GoalsComponent from './goals';


const NewComponent = () => (
  <div className="new">
    <header className="new__header">
      <div className="flex--center">
        <img src={selfImage} alt="me" className="photo" />
        <h1>Hi, my name is Cindy Haden</h1>
      </div>
      <p>I am currently a senior front-end engineer for the core features web team at Aetna that lives in Dallas, TX. </p>
    </header>
    <h2>Blog posts</h2>
    <ul className="blog-list">
      <li className="featured">
        <h3>Front-end Friday: Building a pagination component</h3> <br />
        December 20th, 2022
      </li>
      <li className="tile">
        <img src="https://images.pexels.com/photos/5945570/pexels-photo-5945570.jpeg" alt="" className="tile__img" />
        <div>
          <h3>My desk</h3>
          December 18th, 2022
        </div>
      </li>
      <li className="tile">
        <img src="https://images.pexels.com/photos/5945570/pexels-photo-5945570.jpeg" alt="" className="tile__img" />
        <div>
          <h3>Front-end Friday: Accessibility Tips</h3>
          December 16th, 2022
        </div>
      </li>
    </ul>
    <GoalsComponent />
    <footer className="u--text-center">
      <p>
        <a
          href="https://github.com/sceendy"
          target="_blank"
          rel="noopener noreferrer"
        >
          my resume
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/sceendy"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        |{' '}
        <a
          href="https://www.linkedin.com/in/sceendy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        |{' '}
        <a
          href="https://codepen.io/sceendy"
          target="_blank"
          rel="noopener noreferrer"
        >
          codepen
        </a>
        <br />
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  </div>
);

export default NewComponent;