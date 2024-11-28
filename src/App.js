import { useState } from 'react'
import Header from './Header';
import MovieCard from './MovieCard';
import Footer from './Footer';

// const movie = {
//   "Title": "Multiverse of Madness",
//   "Year": "2018",
//   "imdbID": "t567td44",
//   "Type": "Sci/fi",
//   "Poster": "N/A"
// }

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <Header setMovies={setMovies} />
      {
        movies?.length > 0
          ? (
            <main>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </main>
          ) : (
            <empty className="empty">
              {/* <MovieCard
                movie={movie}
              /> */}
              <h5>No movies found</h5>
            </empty>
          )
      }
      <Footer length={movies.length} />
    </div>
  );
}

export default App;
