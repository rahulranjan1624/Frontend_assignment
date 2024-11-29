import React from 'react';

const Wish = ({ name }) => {
  return (
    <div className='wish-message'>
      CONGRATULATIONS IT IS <span className='highlight'>{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
//wish
