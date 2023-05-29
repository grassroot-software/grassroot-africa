import React, { useState } from "react";
import { handlePayment } from "../payment-api/paystack";


const MakeDonation = () => {

    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentOption, setPayment] = useState('');

    const handleDontationAmountChange = (e)

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(email, amount)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>Email Address:</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your e-mail addresss"
                    />

                    <label>Amount:</label>
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />

                    {/* Button */}
                    <button type="submit" className='btnStart' disabled={loading} className="pay-button">
                        {loading ? 'Processing...' : 'Proceed to pay'}
                    </button>
                </form>
        </div>
    )
}

export default MakeDonation;