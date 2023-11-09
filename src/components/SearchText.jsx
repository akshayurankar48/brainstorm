import React from 'react';
import JSONDATA from '../MOCK_DATA.json';
import { useState } from 'react';

const SearchText = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === '') {
          return val;
        } else if (
          val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return <div key={key}> {val.first_name}</div>;
      })}
    </div>
  );
};

export default SearchText;
