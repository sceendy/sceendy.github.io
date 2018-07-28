import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import favicon from '../assets/favicon.png';

import '../assets/styles/index.css';

const Layout = ({ children, footer }) => (
  <div>
    <Helmet
      title="Cindy | Front-end Engineer"
      meta={[
        { 
          name: 'description', 
          content: 'I build web applications using JavaScript.' 
        },
        { 
          name: 'keywords', 
          content: 'software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev' 
        },
      ]}
    >
    <html lang="en" />
    <link rel="icon" type="image/png" href={favicon} />

    </Helmet>
    
    <main
      style={{
        margin: '0 auto',
        maxWidth: '50.8rem',
        padding: '2.5rem 1.0875rem .05rem'
      }}
    >
      {children}
    </main>
    { footer &&
      <footer className='u--text-center'>
        <p>built using <a href='https://www.gatsbyjs.org/' rel='noopener noreferrer' target='_blank'>gatsbyjs v2</a><br/>
        &copy; 2018</p>
      </footer>
    }
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.bool,
};

export default Layout;