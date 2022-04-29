import React from "react";

const SearchBox = ({ onTextChange }) => {

  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        name='search'
        placeholder='Search Robots'
        onChange={onTextChange}
      />
    </div>
  );
};

export default SearchBox;
