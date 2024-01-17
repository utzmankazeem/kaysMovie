import { useEffect, useState } from 'react'
import Header from './Header';
import MovieCard from './MovieCard';
import Footer from './Footer';

const ApiUrl = 'http://www.omdbapi.com?apikey=3a30cede'

const mov = {
  "Title": "Multiverse of Madness",
  "Year": "2012",
  "imdbID": "t567tyurd44",
  "Type": "movie",
  "Poster": "N/A"
}

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
  
  const movieSearch = async (title) => {
    const res = await fetch(`${ApiUrl}&s=${title}`)
    const gotMov = await res.json();
    //console.log(gotMov.Serch)
    setMovies(gotMov.Search);
  }
  //UE wt empty [], applies @appLaunch 
  useEffect(() => {
    movieSearch('favMov')
  }, [])

  return (
    <div className="App">
      <Header 
      title="Kay's Watch Movies" 
      search={search}
      setSearch={setSearch}
      />
      <MovieCard 
          mov={mov}
      />
      {/* {
        movies?.length > 0
          ? (
            <main> */}
              {//movies.map((movie) => (
                //<MovieCard
                   //movies={movies}
                  // setMovies={setMovies}
                ///>
              //))
            }
            {/* </main>
          ) : (
            <empty>
              <h2>No Movies Found</h2>
            </empty>
          )
      } */}
      <Footer length={mov.length} />
    </div>
  );
}

export default App;
