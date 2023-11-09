import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { cards } from '../constants';
import styles from '../style';
import ReactPaginate from 'react-paginate';
import '../main.css';
import useAxios from '../hooks/useAxios';

const Categories = () => {
  const { data, loading, error, fetchData } = useAxios();
  const [pageNumber, setPageNumber] = useState(0);
  const [ships, setShips] = useState([]);
  const cardsPerPage = 9;
  const pagesVisited = pageNumber * cardsPerPage;

  const fetchShips = async () => {
    try {
      const response = await fetchData('ships');
      console.log(response);
      setShips(response);
    } catch (error) {
      console.error('Error while fetching ship data:', error);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  console.log(ships);

  const displayCards =
    ships &&
    ships.slice(pagesVisited, pagesVisited + cardsPerPage).map((ship) => {
      return <Cards key={ship.ship_id} shipName={ship.ship_name} />;
    });

  const pageCount = Math.ceil(ships.length / cardsPerPage);

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

export default Categories;
