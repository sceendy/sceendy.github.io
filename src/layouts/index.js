import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import favicon from '../assets/favicon.png';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cindy Juarez: Front-end Engineer"
      meta={[
        { 
          name: 'description', 
          content: 'I make web applications using JavaScript.' 
        },
        { 
          name: 'keywords', 
          content: 'front-end, web development, javascript, angular, front-end engineer, front-end dev' 
        },
      ]}
    >
    <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: '50.8rem',
        padding: '2.45rem 1.0875rem 1.45rem'
      }}
    >
      {children()}
    </div>
    <footer className='u--text-center u--padding-20'>
      &copy;2017 sceendy.com
    </footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;