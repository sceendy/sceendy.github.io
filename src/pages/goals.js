import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getPercentage = (value, max) =>  `${Math.floor((value/max) * 100)}%`;

const GoalsComponent = () => (
  <Fragment>
    <h2>Q1 2019 goals</h2>
    <StaticQuery
      query={graphql`
        query GoalsQuery {
          allJson {
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
      render={({ allJson: { edges: goals }}) =>
        goals.map(({ node: goal }, i) =>
          <div className="goal__container"key={i}>
            {goal.title}
            {goal.completed !== goal.total ? 
              <span className="goal__percentage">{getPercentage(goal.completed, goal.total)}</span>
              : <span className="goal__percentage goal__percentage--filled">100%</span>
            }
            <progress max="100" value={(goal.completed/goal.total)* 100} id={goal.goalId}></progress>
          </div>
        )
      }
    />
  </Fragment>
);

export default GoalsComponent;