import React from 'react';
import Link from 'gatsby-link';

require('prismjs/themes/prism-okaidia.css');

const BlogPostPage = ({ data }) => {
  if (data) {
    const post = data.markdownRemark;
    return (
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
    )
  };
};

export default BlogPostPage;

export const postQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`