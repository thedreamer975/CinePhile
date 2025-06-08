import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About CinePhile</h1>
    
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          CinePhile was founded with a simple mission: to make movie booking effortless and enjoyable. We believe that going to the movies should be an experience that starts from the moment you decide to watch a film, not just when you enter the theater.
        </p>
      </section>
      
      <div className="about-row">
        <section className="about-card">
          <h3>Our Mission</h3>
          <p>
            To revolutionize the movie-going experience by providing seamless ticket booking, comprehensive movie information, and exceptional customer service.
          </p>
        </section>
        <section className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become the go-to platform for movie enthusiasts worldwide, connecting audiences with their favorite films and creating memorable cinema experiences.
          </p>
        </section>
      </div>
      
      <section className="about-section">
        <h2>Why Choose CinePhile?</h2>
        <ul className="about-features">
          <li>
            <strong>Easy Booking:</strong> Simple and intuitive interface for hassle-free ticket booking.
          </li>
          <li>
            <strong>Quick & Secure:</strong> Fast booking process with secure payment options.
          </li>
          <li>
            <strong>Multiple Locations:</strong> Book tickets across various cinema chains and cities.
          </li>
          <li>
            <strong>Customer Support:</strong> 24/7 customer support for all your movie booking needs.
          </li>
        </ul>
      </section>
      
      <div className="about-cta">
        <h3>Ready to Book Your Next Movie?</h3>
        <a href="/movies" className="about-btn">Explore Movies Now</a>
      </div>
    </div>
  );
};
export default About;
