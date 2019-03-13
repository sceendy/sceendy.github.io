import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getPercentage = (value, max) =>  `${Math.floor((value/max) * 100)}%`;

const GoalsComponent = () => {
  const getProgress = (idName) => {
    if(typeof document !== "undefined") {
      const progressBar = document.getElementById(idName);
      if (progressBar) {
        const value = progressBar.getAttribute('value');
        const max = progressBar.getAttribute('max');
        return getPercentage(value, max);
      }
    }
  };
  
  return (
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
          goals.map((goal, i) =>
            <div className="goal__container"key={i}>
              {goal.node.title}
              <span className="goal__percentage">{getProgress(goal.node.goalId)}</span>
              <progress max={goal.node.total} value={goal.node.completed} id={goal.node.goalId}></progress>
            </div>
          )
        }
      />
    </Fragment>
  );
};

export default GoalsComponent;