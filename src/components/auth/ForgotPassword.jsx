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

  // Modified isFormValid check
  const isFormValid = formData.email && !errors.email; // Check for email and no error

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    const newErrors = {
      email: formData.email ? "" : "Email address is required",
    };

    setErrors(newErrors);

    if (isFormValid) { // Only submit if the form is valid.
      setIsSubmitting(true);
      setTimeout(() => {
        console.log("Email Address:", formData);
        // Simulate checking if email exists. Replace with your actual logic
        if (formData.email === "test@example.com") { // example email for testing.
          navigate("/auth/reset-password"); //replace with your success page.
        } else {
          setErrors({ ...errors, email: "No account registered with this email." }); // correct error message
        }
        setIsSubmitting(false);
      }, 2000);
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