const MovieCard = ({ mov }) => {

  return (
    <main>
      <movie>
        <div>
          <p>{mov.Year}</p>
        </div>
        <div>
          <img src={mov.Poster !== 'N/A' ? mov.Poster : 'https://via.placeholder.com/400'} alt={mov.title} />
        </div>
        <div>
          <span>{mov.Type}</span>
          <h3>{mov.Title}</h3>
        </div>
      </movie>
    </main>
  )
}
export default MovieCard