import { useState } from "react";
import { FaArrowLeft, FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    checkbox: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear errors when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      email: formData.email ? "" : "Email is required",
      password: formData.password ? "" : "Password is required",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log(formData)
        navigate("/dashboard");
        setIsSubmitting(false);
      }, 2000); 
    }
  };

  return (
    <div className="px-10 py-16 md:px-14 lg:px-20 w-full flex flex-col justify-start md:justify-center">
      <div 
        onClick={() => navigate(-1)} 
      className="block md:hidden font-bold flex flex-row items-center space-x-1 border border-black p-2 rounded-md mb-6 cursor-pointer max-w-20">
        <FaArrowLeft 
        />
        <span>Back</span>
      </div>
      <h2 className="text-2xl font-bold">Welcome, Please Login</h2>
      <p className="text-gray-500 mt-1">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col space-y-2">
        {/* Email Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your Email Address"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </fieldset>

        {/* Password Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Enter your Password"
              className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </fieldset>

        {/* Remember Me and Forgot Password */}
        <div className="flex flex-row items-center justify-between mt-2 text-sm">
          <fieldset className="space-x-1 flex flex-row items-center justify-start">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              onChange={handleChange}
              checked={formData.checkbox}
            />
            <label htmlFor="checkbox">Remember me</label>
          </fieldset>
          <a href="/auth/forgot-password" className="text-orange">
            Forgot Password?
          </a>
        </div>
        {errors.checkbox && <p className="text-red-500 text-sm mt-1">{errors.checkbox}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer bg-blue flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Logging in...</span>
            </div>
          ) : (
            "Login into your Account"
          )}
        </button>
      </form>

      {/* Create Account Link */}
      <p className="text-center text-sm mt-6">
        Are you new here?{" "}
        <a href="/auth/signup" className="text-orange">
          Create Account
        </a>
      </p>

      {/* Divider */}
      <div className="mt-4 mb-4 flex flex-row items-center space-x-4 text-gray-500">
        <hr className="border-none bg-gray-300 w-full h-[2px]" />
        <span>Or</span>
        <hr className="border-none bg-gray-300 w-full h-[2px]" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center justify-center gap-2 py-3 w-full rounded-md border border-gray-400 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
          <FaGoogle className="text-gray-600" />
          <span>Google</span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 py-3 w-full rounded-md border border-gray-400 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out">
          <FaFacebookF className="text-gray-600" />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;