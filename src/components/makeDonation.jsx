import React, { useState } from "react";
import { handlePayment } from "../payment-api/paystack";
import './makeDonation.css';

const MakeDonation = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [amount, setAmount] = useState('');
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
    handlePayment(email, amount)
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setPaymentOption('');
  };

  return (
    <div className="donate-container">
      <h1>Make Donation</h1>
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

        <h2>Personal Information</h2>

        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail address"
          required
        />

        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          required
        />



        {/* Button */}
        <button type="submit" className='btnStart'>
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default MakeDonation;
