// AuthModal.js

import React, { useState } from "react";
import { useSubmitTransaction } from "../hooks/submit";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };
  const { submitTransaction} = useSubmitTransaction();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... existing validation logic ...
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords need to match!");
        return;
      }
      console.log("make a post request to our database");
    } catch (error) {
      console.log(error);
    }
  

    const transactionData = {
      // Example assuming you're registering a new user's email as a transaction

    operation: "registerUser",
    data: {
      userEmail: email,
    },
  // Any other blockchain-specific fields required for the transaction
};

    
    try {
        await submitTransaction(transactionData);
      console.log("Transaction submitted");
    } catch (error) {
      console.error("Failed to submit transaction", error);
    }

  };
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
