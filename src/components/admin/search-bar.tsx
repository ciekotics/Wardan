import React from 'react';
import { LuSearch } from "react-icons/lu";

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='input-wrapper'>
        <LuSearch size={30} />
        <input type="text" placeholder='Search for Blogs...' />
      </div>
    </div>
  )
}

export default Searchbar