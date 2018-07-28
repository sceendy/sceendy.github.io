import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import Layout from '../components';

require('prismjs/themes/prism-okaidia.css');

const BlogPostPage = () => (
  <StaticQuery
    query={graphql`
      query PostQuery {
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
  
    render={data => {
      const post = data.markdownRemark;
      return (
      <Layout footer={true}>
        <article>
          <ul className='breadcrumbs'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li>{post.frontmatter.title}</li>
          </ul>
          <header>
            <h2>{post.frontmatter.title}</h2>
            <div>{post.frontmatter.date}</div>
            { post.frontmatter.tags.map((tag, i) => (
              <div className='tags' key={i}>{ tag }</div>
            ))}
          </header>
          <section>
            <div
              className="post__body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </section>
        </article>
      </Layout>
    )}}
  />
);

export default BlogPostPage;