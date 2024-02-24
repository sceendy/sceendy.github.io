import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getPercentage = (value, max) => `${Math.floor((value / max) * 100)}`;

const GoalsComponent = () => (
  <Fragment>
    <h2>Goals</h2>
    <StaticQuery
      query={graphql`
        query GoalsQuery {
          allGoalsJson(filter: { quarter: { eq: 1 } }) {
            edges {
              node {
                goalId
                title
                total
                completed
                quarter
              }
            }
          }
        }
      `}
      render={({ allGoalsJson: { edges: goals } }) =>
        goals.map(({ node: goal }, i) => {
          const percentage = getPercentage(goal.completed, goal.total);
          return (
            <div
              className="goal__container"
              key={i}
              aria-label="progress bars for goals"
            >
              {goal.title}
              {parseInt(percentage) <= 95 ? (
                <span className="goal__percentage">{percentage}%</span>
              ) : (
                <span className="goal__percentage goal__percentage--filled">
                  {percentage}%
                </span>
              )}
              <progress
                max="100"
                value={percentage}
                id={goal.goalId}
              ></progress>
            </div>
          );
        })
      }
    />
  </Fragment>
);

export default GoalsComponent;
