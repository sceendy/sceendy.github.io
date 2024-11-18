import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import groupBy from 'lodash/groupBy';

import Layout from '../components/layout';

const isRecentYear = year => [2020, 2021, 2022, 2023, 2024].find(y => y === year);

const createBlogList = (year, posts, i) => (
  <div key={i}>
    <h3>{year}</h3>
    <ul className="list--side-pink list--no-style">
      {posts.map(({ node }, i) => (
        <li key={i}>
          <Link to={`/${node.fields.slug}`}>
            <div>{node.frontmatter.title}</div>
            <div>{node.fields.date}</div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const BlogArchiveComponent = ({ location }) => (
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
    render={blogData => {
      const data = blogData.allMarkdownRemark.edges;
      const onBlogPage = location && location !== 'undefined';

      const dataByYear = groupBy(data, 'node.fields.year');

      return (
        <Layout showFooter={onBlogPage} title={'Blog Posts'}>
          {onBlogPage && (
            <div>
              <ul className="breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
              </ul>
              <h2>Blog Posts</h2>
            </div>
          )}
          {!onBlogPage && <h2>blog posts</h2>}

          {Object.keys(dataByYear)
            .filter(year => (!onBlogPage ? isRecentYear(parseInt(year)) : year))
            .sort((a, b) => b - a)
            .map((year, i) => createBlogList(year, dataByYear[year], i))}
        </Layout>
      );
    }}
  />
);

export default BlogArchiveComponent;
