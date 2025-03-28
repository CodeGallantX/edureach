import React, { useState, useEffect, useCallback } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

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

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, [formData]);

  const validateForm = useCallback(() => {
    const newErrors = {
      email: formData.email ? "" : "Email is required",
      password: formData.password ? "" : "Password is required",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }, [formData.email, formData.password]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://e-sdg.onrender.com/create/signIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            logInID: formData.email,
            password: formData.password,
          }),
        });

        if (!response.ok) {
          throw new Error("Network error. Please try again.");
        }

        const result = await response.json();

        if (result.success) {
          localStorage.setItem("authToken", result.token);
          localStorage.setItem("userData", JSON.stringify(result.userData));
          navigate("/dashboard");
        } else {
          setErrors((prev) => ({ ...prev, email: result.message }));
        }
      } catch (error) {
        console.error("Error during login:", error);
        setErrors((prev) => ({
          ...prev,
          email:
            "Unable to connect to the server. Please check your internet connection.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [formData.email, formData.password, navigate, validateForm]);

  const handleGoogleLoginSuccess = useCallback(
    async (credentialResponse) => {
      setIsSubmitting(true);
      try {
        const url = `https://e-sdg.onrender.com/auth/google?credential=${encodeURIComponent(
          credentialResponse.credential
        )}`;
        const response = await fetch(url, {
          method: "GET",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.message || "Google login failed");
        }

        const googleResult = await response.json();

        if (googleResult.success) {
          localStorage.setItem("authToken", googleResult.token);
          localStorage.setItem("userData", JSON.stringify(googleResult.userData));
          navigate("/dashboard");
        } else {
          setErrors((prev) => ({ ...prev, email: googleResult.message }));
        }
      } catch (error) {
        console.error("Google login error", error);
        setErrors((prev) => ({
          ...prev,
          email: error.message || "Google login failed",
        }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [navigate]
  );

  const handleGoogleLoginFailure = useCallback((error) => {
    console.error("Google login failed:", error);
    setErrors((prev) => ({ ...prev, email: "Google login failed." }));
  }, []);

  return (
    <div className="px-6 py-10 md:px-14 lg:px-20 w-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold">Welcome, Please Login</h2>
      <p className="text-gray-500 mt-1">
        Enter your credentials to access your account
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full flex flex-col space-y-4 md:space-y-4"
      >
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
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
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
        {errors.checkbox && (
          <p className="text-red-500 text-sm mt-1">{errors.checkbox}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer bg-deepBlue flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Logging in...</span>
            </div>
          ) : (
            "Login"
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
      <div className="flex justify-center w-full max-w-md mx-auto">
        <div className="w-80">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            width="320px"
            shape="rectangular"
            theme="filled_blue"
            text="signin_with"
            size="large"
            logo_alignment="left"
            useOneTap={false}
            auto_select={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
