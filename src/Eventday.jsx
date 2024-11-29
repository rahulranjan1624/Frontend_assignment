import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import githubLogo from './githubLogo.svg';
import { Link } from 'react-router-dom';

const Eventday = ({ name, day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItEday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = "Ahsan's Birthday"; 
    month = 9; // Month 
    day = 27; // Day 
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Event day in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Bithday Boolean
  const isItEday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        
        const dateAtm = new Date(); //Current Date

        // if the day has passed
        // then set countdown for next year
        let eventdayDay = new Date(currentYear, month - 1, day);
        if (dateAtm > eventdayDay) {
          eventdayDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === eventdayDay.getFullYear() + 1) {
          eventdayDay = new Date(currentYear, month - 1, day);
        }

        const currentTime = dateAtm.getTime();
        
        const eventdayTime = eventdayDay.getTime();

        const timeRemaining = eventdayTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItEday,
        }));
  
      };
      if (!isItEday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItEday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItEday, month]);

  let event = new Date(currentYear, month - 1, day);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthBday = monthNames[event.getMonth()];

  return (
    <div className='page'>
      <Countdown countdownData={state} name={name} />
      {!isItEday && (
        <>
          <div className='eventdate'>
            Date: {day} {monthBday} {currentYear}
          </div>
          <div className='credits'>
            <a href='https://github.com/mahsan15/Countdown-generator-app' >
              <img src={githubLogo} alt='Github-Logo' className='github-logo' />
            </a>
          </div>
          <Link to='/generate'>Generate Link Here</Link>
        </>
      )}
    </div>
  );
};

export default Eventday;
