import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

const OTPForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const { token } = useParams(); // Extract token from URL params

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6 || isNaN(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://e-sdg.onrender.com/verify-otp/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        navigate("/auth/success"); // Redirect on success
      } else {
        const result = await response.json();
        setError(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-10 py-16 md:px-16 lg:px-20 w-full flex flex-col justify-start md:justify-center">
      <div
        onClick={() => navigate(-1)}
        className="font-bold flex flex-row items-center space-x-1 border border-black p-2 rounded-md mb-6 cursor-pointer max-w-20"
      >
        <FaArrowLeft />
        <span>Back</span>
      </div>
      <h2 className="text-2xl font-bold">Enter OTP</h2>
      <p className="text-gray-500">A 6-digit OTP has been sent to your email. Please enter it below.</p>

      <form className="mt-6 w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            name="otp"
            id="otp"
            value={otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </fieldset>

        <button
          type="submit"
          className={`mt-2 py-3 rounded-full text-white w-full text-center flex items-center justify-center ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-deepBlue"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Validating...</span>
            </div>
          ) : (
            "Validate OTP"
          )}
        </button>
      </form>
    </div>
  );
};

export default OTPForm;
