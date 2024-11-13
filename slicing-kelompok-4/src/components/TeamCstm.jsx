import React from 'react';
import larry from '../assets/larry.png';
import meghan from '../assets/meghan.png';
import yvonne from '../assets/yvonne.png';
import diana from '../assets/diana.png';

const TeamCstm = () => {
  const teamMembers = [
    {
      name: 'Larry F. Burnett',
      position: 'CEO',
      image: larry,
    },
    {
      name: 'Meghan M. Johnson',
      position: 'CFO',
      image: meghan,
    },
    {
      name: 'Yvonne L. Johnson',
      position: 'CMO',
      image: yvonne,
    },
    {
      name: 'Diana L. Johnson',
      position: 'COO',
      image: diana,
    },
  ];
  return (
    <div className='px-32 pt-24 font-raleway bg-offwhite mt-6 pb-6'>
        <h2 className="font-bold text-2xl text-peachred text-center">\ Team \</h2>
        <h1 className="font-bold text-4xl text-darkblue text-center">Our Leaders</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {teamMembers.map((member, index) => (
            <div key={index} className='flex flex-col justify-center items-center mt-8 px-5 py-5'>
              <img className='max-w-56' src={member.image} alt="" />
              <h1 className='font-bold text-xl mt-8 text-peachred'>{member.name}</h1>
              <p className='font-medium py-2'>{member.position}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TeamCstm