import React, { Fragment } from 'react';

const GoalsComponent = () => (
  <Fragment>
    <h2>Q1 2019 goals</h2>
    <div className="goal__container">
      Work on personal project for 20 hours
      <progress max="20" value="3"></progress>
    </div>
    <div className="goal__container">
      Meditate for 4 hours
      <progress max="240" value="90"></progress>
    </div>
    <div className="goal__container">
      Run 50 miles
      <progress max="50" value="15"></progress>
    </div>
    <div className="goal__container">
      Lose 15lbs
      <progress max="15" value="0"></progress>
    </div>
    <div className="goal__container">
      Complete Udacitys' Intro to CS course
      <progress max="100" value="52"></progress>
    </div>
    <div className="goal__container">
      Complete Pluralsights' React Path
      <progress max="100" value="62"></progress>
    </div>
  </Fragment>
);

export default GoalsComponent;