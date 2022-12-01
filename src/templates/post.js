import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout showFooter={true} title={post.frontmatter.title}>
      <article>
        <ul className="breadcrumbs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>{post.frontmatter.title}</li>
        </ul>
        <header>
          <h1
            style={{
              visibility: 'hidden',
              height: '0',
              width: '0',
              display: 'block',
              padding: '0',
              margin: '0',
            }}
          >
            Blog Post
          </h1>
          <h2>{post.frontmatter.title}</h2>
          <div>{post.frontmatter.date}</div>
          {post.frontmatter.tags.map((tag, i) => (
            <div className="tags" key={i}>
              {tag}
            </div>
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
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
