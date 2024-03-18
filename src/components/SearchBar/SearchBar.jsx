import React from 'react'

import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
            <BiSearch color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
  )
}

export default SearchBar
