import React from 'react';
import Link from 'gatsby-link';

const BlogArchiveComponent = ({ data, location}) => {
  const onBlogPage = location;
  const blogData = data.allMarkdownRemark.edges;

  // TODO: Refactor this
  const twentySeventeen = blogData.filter(({node}) => node.fields.year === '2017');
  const twentySixteen = blogData.filter(({node}) => node.fields.year === '2016');
  const twentyFifteen = blogData.filter(({node}) => node.fields.year === '2015');
  const twentyFourteen = blogData.filter(({node}) => node.fields.year === '2014');

  return ( 
    <div>
      { onBlogPage &&
        <div>
          <ul className='breadcrumbs'>
            <li><Link to='/'>Home</Link></li>
            <li>Blog</li>
          </ul>
          <h2 className='u--padding-bottom-20'>Blog Posts</h2>
        </div>
      }
      { !onBlogPage && <h3>blog posts</h3> }
      <strong>2017</strong>
      <ul className='list--side-pink list--no-style'>
        { twentySeventeen.map(({ node }, i) => (
          <li key={i}>
            <Link to={node.fields.slug}>
              <div>{node.frontmatter.title}</div>
              <div>{node.fields.date}</div>
            </Link>
          </li>
        ))}
      </ul>
      <strong>2016</strong>
      <ul className='list--side-pink list--no-style'>
        { twentySixteen.map(({ node }, i) => (
          <li key={i}>
            <Link to={node.fields.slug}>
              <div>{node.frontmatter.title}</div>
              <div>{node.fields.date}</div>
            </Link>
          </li>
        ))}
      </ul>

      { /* show more content below */ }
      { onBlogPage &&
        <div>
          <strong>2015</strong>
          <ul className='list--side-pink list--no-style'>
            { twentyFifteen.map(({ node }, i) => (
              <li key={i}>
                <Link to={node.fields.slug}>
                  <div>{node.frontmatter.title}</div>
                  <div>{node.fields.date}</div>
                </Link>
              </li>
            ))}
          </ul>
          <strong>2014</strong>
          <ul className='list--side-pink list--no-style'>
            { twentyFourteen.map(({ node }, i) => (
              <li key={i}>
                <Link to={node.fields.slug}>
                  <div>{node.frontmatter.title}</div>
                  <div>{node.fields.date}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default BlogArchiveComponent;

export const query = graphql`
  query BlogArchiveQuery {
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