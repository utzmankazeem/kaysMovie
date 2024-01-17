import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Header = ({title, search, setSearch}) => {
  return (
     <header>
        <p>{title}</p>
     
     <search>
        <input 
          placeholder='search'
          value= {setSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch 
          alt="search"
          onClick={() => setSearch(setSearch)}
        />
     </search> 
     </header>
  )
}
  Header.defaultProps = {
    title : "Movies App"
  }
export default Header
