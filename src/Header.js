import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const ApiUrl = 'http://www.omdbapi.com?apikey=3a30cede'
let title = "Movlix Streams"

const Header = ({ setMovies }) => {
  const [search, setSearch] = useState('')

  const movieSearch = async (title) => {  
    const res = await fetch(`${ApiUrl}&s=${title}`)
    const data = await res.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    movieSearch('Avengers')
  }, [])

  return (
    <header>
      <h1 className='title'>{title}</h1>
      <search className='search'>
        <input
          placeholder='search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch
          className='img'
          alt="search"
          onClick={() => movieSearch(search)}
        />
      </search>
    </header>
  )
}
export default Header
