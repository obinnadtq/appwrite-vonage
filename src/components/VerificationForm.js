'use client';

import { updatePhoneSession } from "@/appwrite";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const VerificationForm = ({userId}) => {
  const [verificationCode, setVerificationCode] = useState("");
  const router = useRouter();

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmit = (event) => {
    try{
      updatePhoneSession(userId, verificationCode)
      router.push('/');
      event.preventDefault();
    }
    catch(e){
      console.log("error while updating phone session", e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{ marginRight: "10px" }}>
          Verification Code:
        </label>
        <input type="text" name="verificationCode" value={verificationCode} onChange={handleVerificationCodeChange} style={{ width: "150px" }} required />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input type="submit" value="Verify" style={{ width: "100px" }} />
      </div>
    </form>
  )
};

export default VerificationForm;

