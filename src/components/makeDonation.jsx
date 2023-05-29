import React, { useState } from "react";
import { handlePayment } from "../payment-api/paystack";
import './makeDonation.css';

const MakeDonation = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');

  const handleDonationAmountChange = (e) => {
    const selectedAmount = e.target.value;
    setAmount(selectedAmount);
    setPaymentOption(selectedAmount);
  };

  const handleEnterAmountClick = () => {
    setAmount('');
    setPaymentOption('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handlePayment(email, amount)
    setLoading(true)
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setPaymentOption('');
  };

  return (
    <div>
      <h2>Make Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="donation-amount">
          <label>Donation Amount:</label>
          <div className="donation-amount-options">
            <button
              type="button"
              value="50"
              className={paymentOption === '50' ? 'selected' : ''}
              onClick={handleDonationAmountChange}
            >
              $50
            </button>
            <button
              type="button"
              value="100"
              className={paymentOption === '100' ? 'selected' : ''}
              onClick={handleDonationAmountChange}
            >
              $100
            </button>
            <button
              type="button"
              value="200"
              className={paymentOption === '200' ? 'selected' : ''}
              onClick={handleDonationAmountChange}
            >
              $200
            </button>
            <button
              type="button"
              className={paymentOption === '' ? 'selected' : ''}
              onClick={handleEnterAmountClick}
            >
              Enter Amount
            </button>
          </div>
        </div>

        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail address"
          required
        />

        {paymentOption === '' && (
          <div>
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
            />
          </div>
        )}

        {/* Button */}
        <button type="submit" className='btnStart' disabled={loading}>
          {loading ? 'Processing...' : 'Proceed to pay'}
        </button>
      </form>
    </div>
  );
};

export default MakeDonation;
