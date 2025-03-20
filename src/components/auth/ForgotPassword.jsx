import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const isFormValid = formData.email && !errors.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const newErrors = {
      email: formData.email ? "" : "Email address is required",
    };

    setErrors(newErrors);

    if (isFormValid) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://e-sdg.onrender.com/create/forgetPassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        });

        if (response.ok) {
          // If the API call is successful, navigate to the reset password page
          const result = await response.json();
          const token = result.token; // Assuming the API returns a token
          navigate(`/auth/reset-password/${token}`);
        } else {
          // Handle API errors
          const result = await response.json();
          setErrors({ ...errors, email: result.message || "No account registered with this email." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ ...errors, email: "An error occurred. Please try again later." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="px-10 py-16 md:px-16 lg:px-20 justify-start md:justify-center">
      <div
        onClick={() => navigate(-1)}
        className="font-bold flex flex-row items-center space-x-1 border border-black p-2 rounded-md mb-6 cursor-pointer max-w-20"
      >
        <FaArrowLeft />
        <span>Back</span>
      </div>
      <h2 className="text-3xl font-bold">Reset Password</h2>
      <p className="text-gray-500">Enter the email you registered with and we'll send instructions to recover your account</p>

      <form className="mt-6 w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </fieldset>

        <button
          type="submit"
          className={`mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer flex items-center justify-center ${
            isSubmitting || !isFormValid ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-deepBlue"
          }`}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div
                className={`animate-spin rounded-full h-6 w-6 border-b-2 ${
                  isSubmitting ? "border-b-deepBlue" : "border-b-white"
                }`}
              ></div>
              <span>Sending Email...</span>
            </div>
          ) : (
            "Send Email"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;