import React from 'react';
import useGet from '../hooks/useGetArray';

const Team = ({total=8, limit=10}) => {
  // DATA TEAM MEMBER
  const {data, error, loading} = useGet({page: `team?limit=${limit}`})

  const members = data.slice(0, total);

  return (
    <div className='md:px-32 px-10 pt-24 font-raleway'>
        <h2 className="font-bold text-2xl text-peachred text-center">\ Team \</h2>
        <h1 className="font-bold text-4xl text-darkblue text-center">Our Leaders</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          {/* LOOPING SHOW MEMBER */}
          {members.map((member, index) => (
            <div key={index} className='flex flex-col justify-center items-center mt-8'>
              <img className='max-w-56' src={member.imageUrl} alt="" />
              <h1 className='font-bold text-xl mt-8 text-peachred'>{member.name}</h1>
              <p className='font-medium py-2'>{member.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Team