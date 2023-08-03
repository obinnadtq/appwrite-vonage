'use client';

import { createPhoneSession } from "@/appwrite";
import React, { useState } from "react";
import VerificationForm from "./VerificationForm";

const SignupForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [userId, setUserId] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    try {
      const response = createPhoneSession(phoneNumber);
      response.then(user => {
        setUserId(user['userId'])
      })
      event.preventDefault();
      alert("verification code has been sent");
      setTimeout(() => {
        setIsVerificationSent(true);
      }, "1000");
    }
    catch (e) {
      console.log("error while creating phone session", e);
    }
  }

  return (
    <>
      {!isVerificationSent && (
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ marginRight: "10px" }}>
              Phone Number:
            </label>
            <input type="password" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} style={{ width: "150px" }} required />
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <input type="submit" value="Get Code" style={{ width: "100px" }} />
          </div>
        </form>
      )}
      {isVerificationSent && (
        <VerificationForm userId={userId}/>
      )}
    </>

  )
}

export default SignupForm;