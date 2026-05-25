import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";	
function Varify() {
 const navigate = useNavigate();					
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerify = async () => {

    if (otp.length !== 6) {
      setMessage("Please enter valid 6 digit OTP");
      return;
    }

    try {

      setLoading(true);
      setMessage("");

      const res = await axios.post(
        `${import.meta.env.VITE_URL}/api/verify-email`,
        {
          email: email,
          otp: otp
        }
      );

      setMessage(res.data.msg);
          navigate("/Login");
    } catch (error) {

      setMessage(
        error.response?.data?.msg || "Verification Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md mx-4 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Email Verification
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border rounded-lg p-3 mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          maxLength="6"
          placeholder="Enter OTP"
          className="w-full border rounded-lg p-3 text-center tracking-widest"
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-red-500">
            {message}
          </p>
        )}

      </div>

    </div>
  );
}

export default Varify;