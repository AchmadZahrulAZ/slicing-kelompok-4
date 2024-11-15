import React from 'react';

const Header = ({ title }) => {
  return (
    <div className='bg-darkblue flex flex-col items-center justify-center font-raleway py-24 gap-2'>
      <h1 className='font-bold text-5xl text-peachred'>{title}</h1>
      <h3 className='font-medium text-2xl text-white'>Home / {title}</h3>
    </div>
  );
};

export default Header;