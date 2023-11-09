import React, { useEffect } from 'react';
import useAxios from '../hooks/useAxios';

const Cards = ({ content, name, title, img }) => {
  const { data, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('capsules')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/dhuaafpob/image/upload/v1699453059/rocket_pk4twi.jpg')",

    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div
      style={myStyle}
      className='flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 '
    >
      {/* <img
        src={quotes}
        alt='quotes'
        className='w-[42px]  h-[27px] object-contain'
      /> */}
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10  '>
        {content}
      </p>
      {/* 
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full ' />

        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
            {title}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
