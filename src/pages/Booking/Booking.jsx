import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../../assets/assets";
import './Booking.css'

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === Number(id));

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState("18:00");

  if (!movie) {
    return (
      <div className="booking-not-found">
        <h1>Movie not found</h1>
        <a href="/movies" className="back-link">Back to Movies</a>
      </div>
    );
  }

  // Data
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const bookedSeats = ['A5', 'A6', 'B3', 'C7', 'C8', 'D10', 'E2', 'F5', 'F6', 'G9'];
  const showtimes = ["12:00", "15:30", "18:00", "21:30"];

  // Seat selection
  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getSeatStatus = (seatId) => {
    if (bookedSeats.includes(seatId)) return 'booked';
    if (selectedSeats.includes(seatId)) return 'selected';
    return 'available';
  };

  // For seat color (add your own CSS classes for these)
  const getSeatColor = (status) => {
    switch (status) {
      case 'booked': return 'seat-booked';
      case 'selected': return 'seat-selected';
      case 'available': return 'seat-available';
      default: return '';
    }
  };

  // Pricing
  const ticketPrice = movie.price || 150;
  const convenienceFee = 25;
  const taxes = Math.round((ticketPrice * selectedSeats.length + convenienceFee) * 0.18);
  const totalAmount = (ticketPrice * selectedSeats.length) + convenienceFee + taxes;

  // Proceed
  const handleProceedToPayment = () => {
  navigate('/payment', {
    state: {
      selectedSeats,
      selectedShowtime,
      ticketPrice,
      convenienceFee,
      taxes,
      totalAmount,
      movieTitle: movie.title, // if you want to show movie info
    }
  });
};


  return (
    <div className="booking-container">
      {/* Movie Info */}
      <div className="booking-movie-info">
        <div className="booking-movie-flex">
          <img 
            src={movie.poster} 
            alt={movie.title}
            className="booking-movie-poster"
          />
          <div className="booking-movie-details">
            <h1>{movie.title}</h1>
            <div className="booking-movie-meta">
              <div>
                <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
                <p><strong>Genre:</strong> {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}</p>
                <p><strong>Duration:</strong> {movie.duration}</p>
                <p><strong>Director:</strong> {movie.director}</p>
              </div>
              <div>
                <p><strong>Languages:</strong> {Array.isArray(movie.language) ? movie.language.join(", ") : movie.language}</p>
                <p><strong>Formats:</strong> {Array.isArray(movie.format) ? movie.format.join(", ") : movie.format}</p>
                <p><strong>Release Date:</strong> {movie.releaseDate ? new Date(movie.releaseDate).toLocaleDateString() : "N/A"}</p>
              </div>
            </div>
            <div className="booking-movie-cast">
              <p><strong>Cast:</strong> {Array.isArray(movie.cast) ? movie.cast.join(", ") : movie.cast}</p>
            </div>
            <div className="booking-movie-description">
              <p><strong>Description:</strong> {movie.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Showtime Selection */}
      <div className="booking-showtime">
        <h2>Select Showtime</h2>
        <div className="booking-showtime-buttons">
          {showtimes.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedShowtime(time)}
              className={selectedShowtime === time ? "showtime-btn selected" : "showtime-btn"}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="booking-main-content">
        {/* Seat Selection */}
        <div className="booking-seats">
          <h2>Select Seats</h2>
          {/* Screen */}
          <div className="booking-screen">
            <div className="screen-bar"></div>
            <p className="screen-label">SCREEN</p>
          </div>
          {/* Seats */}
          <div className="seats-area">
            {rows.map((row) => (
              <div key={row} className="seat-row">
                <span className="seat-row-label">{row}</span>
                {Array.from({ length: seatsPerRow }, (_, index) => {
                  const seatNumber = index + 1;
                  const seatId = `${row}${seatNumber}`;
                  const status = getSeatStatus(seatId);
                  return (
                    <button
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      className={`seat-btn ${getSeatColor(status)}`}
                      disabled={status === 'booked'}
                    >
                      {seatNumber}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div className="seats-legend">
            <span><span className="legend-box seat-available"></span> Available</span>
            <span><span className="legend-box seat-selected"></span> Selected</span>
            <span><span className="legend-box seat-booked"></span> Booked</span>
          </div>
        </div>

        {/* Booking Summary */}
        <div className="booking-summary">
          <h2>Booking Summary</h2>
          {selectedSeats.length > 0 ? (
            <div>
              <div>
                <p>Selected Seats: <strong>{selectedSeats.join(", ")}</strong></p>
                <p>Showtime: <strong>{selectedShowtime}</strong></p>
              </div>
              <div className="summary-pricing">
                <p>Tickets ({selectedSeats.length}x): <span>₹{ticketPrice * selectedSeats.length}</span></p>
                <p>Convenience Fee: <span>₹{convenienceFee}</span></p>
                <p>Taxes: <span>₹{taxes}</span></p>
                <hr />
                <p className="summary-total">Total: <span>₹{totalAmount}</span></p>
              </div>
              <button 
                onClick={handleProceedToPayment}
                className="proceed-btn"
              >
                Proceed to Payment
              </button>
            </div>
          ) : (
            <p>Please select seats to proceed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
