import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChnage = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='bg-white w-full rounded-[10px] h-10 py-0 px-4 shadow-lg flex items-center'>
      <FaSearch color='royalBlue' />
      <input
        value={input}
        onChange={(e) => handleChnage(e.target.value)}
        placeholder='Type to serach...'
        className='bg-transparent border-none h-full text-xl w-full ml-2 focus:outline-none'
      />
    </div>
  );
};

export default SearchBar;
