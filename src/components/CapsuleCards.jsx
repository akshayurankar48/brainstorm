import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

const Cards = ({ capsuleName, capsuleDetails }) => {
  const { data, loading, error, fetchData } = useAxios();

  //   const myStyle = {
  //     // backgroundImage: `url(${shipImage})`,
  //     fontSize: '50px',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     backgroundRepeat: 'no-repeat',
  //   };
  return (
    <div
      //   style={myStyle}
      className='flex justify-between flex-col px-10 py-12 w-80 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-6 cursor-pointer feedback-card'
    >
      {/* <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10  '>
        {capsuleName}
      </p> */}

      <div className='flex flex-row'>
        {/* <img
          src={shipImage}
          alt={name}
          className='w-[48px] h-[48px] rounded-full '
        /> */}

        <div className='flex flex-col items-center justify-center ml-4'>
          <p className='font-poppins font-normal  text-[18px] leading-[32px] text-white my-10  '>
            {capsuleName}
          </p>

          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
            {capsuleDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
