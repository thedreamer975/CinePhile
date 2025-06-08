import { Link } from 'react-router-dom';
import { movies } from '../../assets/assets'; 
import './Home.css';

const Home = () => {
  const latestMovies = movies.slice(0, 3);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>CinePhile</span></h1>
          <p>Book your favorite movie tickets in just a few clicks</p>
          <Link to="/movies" className="hero-button">Movie List</Link>
        </div>
      </div>

      {/* Latest Movies Section */}
      <section className="latest-movies-section">
        <div className="latest-movies-container">
          <h2 className="latest-movies-title">Latest Movies</h2>
          <div className="latest-movies-grid">
            {latestMovies.map((movie) => (
              <div key={movie.id} className="latest-movie-card">
                <div className="latest-movie-image-wrapper">
                  <img 
                    src={movie.poster}
                    alt={movie.title}
                    className="latest-movie-poster"
                  />
                  <div className="latest-movie-rating">
                    ⭐ {movie.rating}
                  </div>
                </div>
                <div className="latest-movie-info">
                  <h3 className="latest-movie-title">{movie.title}</h3>
                  <p className="latest-movie-genre">{movie.genre}</p>
                  <p className="latest-movie-duration">{movie.duration}</p>
                  <Link 
                    to={`/booking/${movie.id}`}
                    className="latest-movie-book-btn"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="latest-movies-explore">
            <Link 
              to="/movies"
              className="explore-button"
            >
              Explore More Movies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
