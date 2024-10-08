import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const ApiUrl = 'http://www.omdbapi.com?apikey=3a30cede'
let title = "Moflix Movies"

const Header = ({ setMovies }) => {
  const [search, setSearch] = useState('')

  const movieSearch = async (title) => {
    const res = await fetch(`${ApiUrl}&s=${title}`)
    const data = await res.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    movieSearch('favMov')
  }, [])

  return (
    <header>
      <h1>{title}</h1>
      <search className='search'>
        <input
          placeholder='search for movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch
          alt="search"
          onClick={() => movieSearch(search)}
        />
      </search>
    </header>
  )
}
export default Header
