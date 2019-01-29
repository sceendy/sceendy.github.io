import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogArchiveComponent = ({location}) => (
  <StaticQuery
    query={graphql`
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
    `}

    render={yuckyData => {
      const data = yuckyData.allMarkdownRemark.edges;
      const onBlogPage = location && location !== 'undefined';

      let twentyNineteen= [],
          twentyEighteen = [],
          twentySeventeen = [],
          twentySixteen = [],
          twentyFifteen = [],
          twentyFourteen = [];

      data.forEach(({node}) => {
        switch (node.fields.year) {
          case 2019:
            twentyNineteen.push({node});
            break;
          case 2018:
            twentyEighteen.push({node});
            break;
          case 2017:
            twentySeventeen.push({node});
            break;
          case 2016:
            twentySixteen.push({node});
            break;
          case 2015:
            twentyFifteen.push({node});
            break;
          case 2014:
            twentyFourteen.push({node});
            break;
          default:
            break;
        }
      });

      return (
        <Layout showFooter={onBlogPage} title={'Blog Posts'}>
        { onBlogPage &&
          <div>
            <ul className='breadcrumbs'>
              <li><Link to='/'>Home</Link></li>
              <li>Blog</li>
            </ul>
            <h2>Blog Posts</h2>
          </div>
        }
        { !onBlogPage && <h2>blog posts</h2> }
        <strong>2019</strong>
        <ul className='list--side-pink list--no-style'>
          { twentyNineteen.map(({ node }, i) => (
            <li key={i}>
              <Link to={node.fields.slug}>
                <div>{node.frontmatter.title}</div>
                <div>{node.fields.date}</div>
              </Link>
            </li>
          ))}
        </ul>
        <strong>2018</strong>
        <ul className='list--side-pink list--no-style'>
          { twentyEighteen.map(({ node }, i) => (
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
      </Layout>
    )
  }} />
);

export default BlogArchiveComponent;