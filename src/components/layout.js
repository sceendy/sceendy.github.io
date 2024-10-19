import React from 'react';
import { string, bool, any } from 'prop-types';
import Helmet from 'react-helmet';

import favicon from '../static/favicon.png';

import '../static/styles/index.css';

const Layout = ({ children, showFooter, title, className }) => (
  <>
    <Helmet
      title={`${showFooter ? title + ' - ' : ''}Cindy | Front-end Engineer`}
      meta={[
        {
          name: 'description',
          content: 'I build web applications using JavaScript.',
        },
        {
          name: 'keywords',
          content:
            'software engineer, front-end, web development, javascript, angular, react, front-end engineer, front-end dev',
        },
      ]}
    >
      <html lang="en" />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>

    <main
      className={className}
      style={
        showFooter
          ? {
              margin: '0 auto',
              maxWidth: '50.8rem',
              padding: '2.5rem 1.0875rem .05rem',
            }
          : {}
      }
    >
      {children}
    </main>
    {showFooter && (
      <footer className="u--text-center">
        <p>
          <a
            href="https://github.com/sceendy"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/cindy1001/"
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
    )}
  </>
);

Layout.propTypes = {
  children: any,
  showFooter: bool,
  title: string,
  className: string,
};

export default Layout;
