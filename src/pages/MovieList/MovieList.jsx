import { useState } from "react";
import { Link } from "react-router-dom";
import { movies, genres, locations, formats } from "../../assets/assets";
import "./MovieList.css";

const MovieList = () => {
  const [filters, setFilters] = useState({
    location: "",
    genre: "",
    format: "",
    language: ""
  });

  // Filtering logic
  const filteredMovies = movies.filter(movie => {
    const matchesGenre = filters.genre ? movie.genre.toLowerCase() === filters.genre.toLowerCase() : true;
    const matchesFormat = filters.format ? movie.format.includes(filters.format) : true;
    const matchesLanguage = filters.language ? movie.language.toLowerCase() === filters.language.toLowerCase() : true;
    // Location filter is a placeholder unless you add location to movie data
    return matchesGenre && matchesFormat && matchesLanguage;
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      genre: "",
      format: "",
      language: ""
    });
  };

  return (
    <div className="movie-list-container">
      <h1>All Movies</h1>
      
      {/* Filters */}
      <div className="filters">
        <select
          className="filter-select"
          value={filters.location}
          onChange={e => handleFilterChange("location", e.target.value)}
        >
          {locations.map(loc => (
            <option key={loc} value={loc === "All Cities" ? "" : loc}>
              {loc}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={filters.genre}
          onChange={e => handleFilterChange("genre", e.target.value)}
        >
          {genres.map(gen => (
            <option key={gen} value={gen === "All" ? "" : gen}>
              {gen}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={filters.format}
          onChange={e => handleFilterChange("format", e.target.value)}
        >
          {formats.map(fmt => (
            <option key={fmt} value={fmt === "All Formats" ? "" : fmt}>
              {fmt}
            </option>
          ))}
        </select>
        <select
          className="filter-select"
          value={filters.language}
          onChange={e => handleFilterChange("language", e.target.value)}
        >
          <option value="">All Languages</option>
          {[...new Set(movies.map(m => m.language))].map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <button className="clear-button" onClick={clearFilters}>Clear All</button>
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {filteredMovies.length === 0 && (
          <div className="no-movies">No movies found matching your filters.</div>
        )}
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <h3>{movie.title}</h3>
            <p>{movie.genre} | {movie.language}</p>
            <p>Rating: {movie.rating}</p>
            <p>{movie.duration}</p>
            <p>₹{movie.price}</p>
            <Link 
              to={`/booking/${movie.id}`}
              className="book-button"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
