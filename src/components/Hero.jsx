import styles from '../style';
import { elon, robot, discount } from '../assets';
import GetStarted from './GetStarted';
import Button from './Button';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';

const Hero = () => {
  const slides = [
    {
      url: 'https://res.cloudinary.com/dhuaafpob/image/upload/v1699446819/elon_t8xohb.jpg',
    },
    {
      url: 'https://res.cloudinary.com/dhuaafpob/image/upload/v1699448050/musk_igfcll.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            The Next <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>Generation</span>{' '}
          </h1>
          {/* <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div> */}
        </div>

        <div className='flex flex-row items-center py-[6px] px-4  rounded-[10px] mb-1'>
          {/* <img src={discount} alt='discount' className='w-[32px] h-[32px]' /> */}
          {/* <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>
              Successful first-stage burn and transition to second stage,
              maximal altitude 289 km.
            </span>
            <span className='text-white'>
              Harmonic oscillation at T+5 minutes Premature engine shutdown at
              T+7 min 30 s. Failed to reach orbit.
            </span>
          </p> */}
        </div>

        {/* <p className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
          Payment Method.
        </p> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          Successful first-stage burn and transition to second stage, maximal
          altitude 289 km. Harmonic oscillation at T+5 minutes Premature engine
          shutdown at T+7 min 30 s. Failed to reach orbit.
        </p>
        <Button styles='mt-10' />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative group`}
      >
        {/* <img
          src={elon}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        /> */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-[100%] h-[100%] bg-cover bg-center duration-500 relative'
        ></div>
        {/* Left arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer text-white'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      {/* 
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
