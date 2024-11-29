import React from 'react';
import Eventday from './Eventday';

const Router = (props) => {
  const { params } = props.match;
  const { name, day, month } = params;
  return (
    <>
      <Eventday name={name} month={month} day={day} />
    </>
  );
};

export default Router;
//used for routing 
