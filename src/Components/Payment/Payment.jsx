import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });
    const location = useLocation();
    const booking = location.state;

  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful!\nThank you for booking.");
    // You can add navigation or API call here
  };

  return (
    <div className="payment-bg">
      <div className="payment-container">
        <div className="payment-header">
          <h1>Payment</h1>
          <p>Complete your movie booking</p>
        </div>
        <div className="payment-card">
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-list">
              <div className="summary-row">
                <span>Movie Ticket ({booking?.selectedSeats?.length || 0} seats) :</span>
                <span>₹{(booking?.ticketPrice || 0) * (booking?.selectedSeats?.length || 0)}</span>
              </div>
              <div className="summary-row">
                <span>Booking Fee :</span>
                <span>₹{booking?.convenienceFee || 0}</span>
              </div>
              <div className="summary-row">
                <span>Taxes :</span>
                <span>₹{booking?.taxes || 0}</span>
              </div>
              <div className="summary-total-row">
                <span>Total :</span>
                <span className="summary-total">₹{booking?.totalAmount || 0}</span>
              </div>
            </div>
          </div>
          <hr />

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="payment-form">
            <h3>Payment Details</h3>
            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                required
                value={paymentData.cardName}
                onChange={handleInputChange}
                placeholder="Enter cardholder name"
                autoComplete="cc-name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                required
                value={paymentData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                autoComplete="cc-number"
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  required
                  value={paymentData.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  autoComplete="cc-exp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  required
                  value={paymentData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength={3}
                  autoComplete="cc-csc"
                />
              </div>
            </div>
            <button type="submit" className="pay-btn">
              Pay ₹280
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
