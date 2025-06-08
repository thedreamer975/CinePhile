import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import MovieList from './pages/MovieList/MovieList';
import Booking from './pages/Booking/Booking';
import About from './pages/About/About';
import Payment from './Components/Payment/Payment';
import Login from './Components/Login/Login'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/signin" element={<Login/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App; 