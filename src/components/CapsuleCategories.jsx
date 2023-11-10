import React, { useEffect, useState } from 'react';
import CapsuleCards from './CapsuleCards';
import { cards } from '../constants';
import styles from '../style';
import ReactPaginate from 'react-paginate';
import '../main.css';
import useAxios from '../hooks/useAxios';

const CapsuleCategories = () => {
  const { data, loading, error, fetchData } = useAxios();
  const [pageNumber, setPageNumber] = useState(0);
  const [capsules, setCapsules] = useState([]);
  const cardsPerPage = 6;
  const pagesVisited = pageNumber * cardsPerPage;

  const fetchCapsules = async () => {
    try {
      const response = await fetchData('capsules');
      setCapsules(response);
    } catch (error) {
      console.error('Error while fetching Capsule data:', error);
    }
  };

  useEffect(() => {
    fetchCapsules();
  }, []);

  const displayCards =
    capsules &&
    capsules.slice(pagesVisited, pagesVisited + cardsPerPage).map((capsule) => {
      return (
        <CapsuleCards
          key={capsule.capsule_serial}
          capsuleName={capsule.capsule_serial}
          capsuleDetails={capsule.details}
        />
      );
    });

  const pageCount = Math.ceil(capsules.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section
      id='clients'
      className={`${styles.paddingY} ${styles.flexDesktop} flex-col relative`}
    >
      {/* Todo */}
      <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient ' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        {/* <h1 className={styles.heading2}>
          What people are <br className='sm:block hidden' /> saying about us
        </h1> */}

        {/* <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div> */}
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {displayCards}
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </section>
  );
};

export default CapsuleCategories;
