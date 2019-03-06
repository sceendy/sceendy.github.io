import React, { Fragment } from 'react';

const getPercentage = (value, max) =>  `${Math.floor((value/max) * 100)}%`;

const goals = [
  {
    goalId: 'personalProject',
    title: 'Work on personal project for 20 hours',
    total: 20,
    completed: 8
  },
  {
    goalId: 'meditate',
    title: 'Meditate for 4 hours',
    total: 240,
    completed: 14 * 10
  },
  {
    goalId: 'run',
    title: 'Run 50 miles',
    total: 50,
    completed: 25.14
  },
  {
    goalId: 'loseWeight',
    title: 'Lose 15lbs',
    total: 15,
    completed: 2
  },
  {
    goalId: 'learning1',
    title: 'Complete Udacitys\' Intro to CS course',
    total: 100,
    completed: 52
  },
  {
    goalId: 'learning2',
    title: 'Complete Pluralsights\' React Path',
    total: 100,
    completed: 75
  },
];

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
      {goals.map(goal =>
        <div className="goal__container" key={goal.goalId}>
          {goal.title}
          <span className="goal__percentage">{getProgress(goal.goalId)}</span>
          <progress max={goal.total} value={goal.completed} id={goal.goalId}></progress>
        </div>
      )}
    </Fragment>
  );
};

export default GoalsComponent;