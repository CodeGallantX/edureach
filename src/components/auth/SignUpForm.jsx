import React, { useState } from "react";
import { FaChevronLeft, FaEye, FaEyeSlash, FaXmark, FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "Student", // Default role is Student
    passwordVisible: false,
    confirmPasswordVisible: false,
  });

  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    maxLength: false,
    upperLower: false,
    numberSpecial: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "", // Error for role
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate fields on change
    if (name === "password") {
      validatePassword(value);
      setErrors((prev) => ({ ...prev, password: "" }));
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    } else {
      setErrors((prev) => ({ ...prev, [name]: value ? "" : "This field is required" }));
    }
  };

  const validatePassword = (password) => {
    setPasswordConditions({
      minLength: password.length >= 8,
      maxLength: password.length <= 20,
      upper: /(?=.*[A-Z])/.test(password),
      lower: /(?=.*[a-z])/.test(password),
      number: /(?=.*\d)/.test(password),
      special: /(?=.*[!@#$%*?&.])/.test(password),
    });
  };

  const isPasswordValid =
    passwordConditions.minLength &&
    passwordConditions.maxLength &&
    passwordConditions.upper &&
    passwordConditions.lower &&
    passwordConditions.number &&
    passwordConditions.special;

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phoneNumber &&
    isPasswordValid &&
    formData.password &&
    formData.confirmPassword === formData.password &&
    formData.role; // Ensure role is selected

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: formData.fullName ? "" : "Full Name is required",
      email: formData.email ? "" : "Email is required",
      phoneNumber: formData.phoneNumber ? "" : "Phone Number is required",
      password: formData.password ? "" : "Password is required",
      confirmPassword: formData.confirmPassword === formData.password ? "" : "Passwords do not match",
      role: formData.role ? "" : "Role is required", // Validate role
    };

    setErrors(newErrors);

    if (isFormValid) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://e-sdg.onrender.com/create/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            username: formData.username,
            role: formData.role, // Include role in the request
          }),
        });

        if (!response.ok) {
          throw new Error("Sign-up failed");
        }

        const result = await response.json();
        // console.log("Sign-up successful:", result);

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(result.userData));

        // Navigate to verification page
        navigate("/auth/verification");
      } catch (error) {
        console.error("Error during sign-up:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="px-4 py-10 md:px-16 lg:px-20 w-full flex flex-col justify-start md:justify-center">
      <div
        onClick={() => navigate(-1)}
        className="block md:hidden font-bold flex flex-row items-center space-x-1 border border-black p-2 rounded-md mb-6 cursor-pointer max-w-20">
        <FaChevronLeft />
        <span>Back</span>
      </div>
      <h2 className="text-2xl font-bold">Create an Account</h2>
      <p className="text-gray-500">Enter your information to create your account</p>

      <form className="mt-6 w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="fullName">Full Name (First Name & Last Name only)</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your Full Name"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </fieldset>

        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your Username"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </fieldset>

        {/* Phone Number Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </fieldset>

        {/* Email Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email Address"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </fieldset>

        {/* Role Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
            required
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </fieldset>

        {/* Password Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="password">Password</label>
          <div className="relative w-full">
            <input
              type={formData.passwordVisible ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              required
            />
            <button
              type="button"
              onClick={() => setFormData({ ...formData, passwordVisible: !formData.passwordVisible })}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {formData.passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* Password Conditions */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span
              className={`px-3 py-1 rounded-full text-sm flex border items-center gap-2 ${passwordConditions.minLength
                ? "bg-green-100 text-green-700 border border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              Minimum 8 characters
              {passwordConditions.minLength ? <FaCheck /> : <FaXmark />}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm flex border items-center gap-2 ${passwordConditions.maxLength
                ? "bg-green-100 text-green-700 border border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              Maximum 20 characters
              {passwordConditions.maxLength ? <FaCheck /> : <FaXmark />}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${passwordConditions.upper
                ? "bg-green-100 text-green-700 border border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              1 Upper letter
              {passwordConditions.upper ? <FaCheck /> : <FaXmark />}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${passwordConditions.lower
                ? "bg-green-100 text-green-700 border border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              1 Lowercase letter
              {passwordConditions.lower ? <FaCheck /> : <FaXmark />}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm flex border items-center gap-2 ${passwordConditions.number
                ? "bg-green-100 text-green-700 border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              <span>1 Number </span>
              {passwordConditions.number ? <FaCheck /> : <FaXmark />}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm flex border items-center gap-2 ${passwordConditions.special
                ? "bg-green-100 text-green-700 border border-green-500"
                : "bg-red-100 text-red-700 border-red-400"
                }`}
            >
              <span>1 Special character</span>
              {passwordConditions.special ? <FaCheck /> : <FaXmark />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </fieldset>

        {/* Confirm Password Field */}
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative w-full">
            <input
              type={formData.confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your Password"
              className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out"
              required
            />
            <button
              type="button"
              onClick={() => setFormData({ ...formData, confirmPasswordVisible: !formData.confirmPasswordVisible })}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {formData.confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className={`mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer flex items-center justify-center ${isSubmitting || !isFormValid ? "bg-gray-400 cursor-not-allowed" : "bg-deepBlue"
            }`}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Creating your account...</span>
            </div>
          ) : (
            "Create your Account"
          )}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-sm mt-6">
        Do you have an account already?{" "}
        <a href="/auth/login" className="text-orange">
          Login Now
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
