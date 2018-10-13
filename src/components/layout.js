import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import favicon from '../static/favicon.png';

import '../static/styles/index.css';

const Layout = ({ children, showFooter, title }) => (
  <div>
    <Helmet
      title={`${showFooter ? title + ' - ' : ''}Cindy - Front-end Engineer`}
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
      style={ showFooter ? {
        margin: '0 auto',
        maxWidth: '50.8rem',
        padding: '2.5rem 1.0875rem .05rem'
      } : {}}
    >
      {children}
    </main>
    { showFooter &&
      <footer className='u--text-center'>
        <p>built using <a href='https://gatsbyjs.org/' rel='noopener noreferrer' target='_blank'>gatsby v2</a><br/>
        &copy; 2018</p>
      </footer>
    }
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
  showFooter: PropTypes.bool,
  title: PropTypes.string
};

export default Layout;