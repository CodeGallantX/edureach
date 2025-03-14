import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const OTPForm = () => {
  const [formData, setFormData] = useState({
    otp: "",
  });

  const [errors, setErrors] = useState({
    otp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // For loader/spinner

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update errors on change
    setErrors({
      ...errors,
      [name]: value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
    });
  };

  // Modified isFormValid check
  const isFormValid = formData.otp.length === 6 && !errors.otp; // Check for 6 digits and no error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const newErrors = {
      otp: formData.otp ? "" : "One Time Passcode is required",
    };

    setErrors(newErrors);

    if (formData.otp === "123456") {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("OTP Validated:", formData);
        navigate("/dashboard");
        setIsSubmitting(false);
      }, 2000);
    } else {
      setErrors({ ...errors, otp: "Incorrect OTP" });
    }
  };

  return (
    <div className="px-10 py-16 md:px-16 lg:px-20 justify-start md:justify-center">
      <div className="font-bold flex flex-row items-center space-x-1 border border-black p-2 rounded-md mb-6 cursor-pointer">
        <FaChevronLeft onClick={() => navigate(-1)} />
        <span>Back</span>
      </div>
      <h2 className="text-3xl font-bold">Verification</h2>
      <p className="text-gray-500">Enter the OTP sent to the phone number you provided</p>

      <form className="mt-6 w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="otp">OTP</label>
          <input
            type="number"
            name="otp"
            id="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
        </fieldset>

        <p className="text-left text-sm mt-6">
          Didn't receive an OTP? <a href="#" className="text-orange">Resend OTP</a>
        </p>

        <button
          type="submit"
          className={`mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer flex items-center justify-center ${
            isSubmitting || !isFormValid ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue"
          }`}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div
                className={`animate-spin rounded-full h-6 w-6 border-b-2 ${
                  isSubmitting ? "border-b-gray-400" : "border-b-white"
                }`}
              ></div>
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