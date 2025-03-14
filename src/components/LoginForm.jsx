import { useState } from "react";
import { FaChevronLeft, FaGoogle, FaFacebookF } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.checkbox


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/auth/verification');
    }
  }


  const navigate = useNavigate();

  return (
    <div className="px-10 py-16 md:px-14 lg:px-20 w-full flex flex-col justify-start md:justify-center">
      <FaChevronLeft
        onClick={() => navigate(-1)}
        className="block md:hidden font-bold text-3xl bg-gray-200 text-gray-600 p-2 rounded-full mb-6 cursor-pointer" />
      <h2 className="text-2xl font-bold">Welcome, Please Login</h2>
      <p className="text-gray-500 mt-1">Enter your credentials to access your account</p>

      <form onSubmit={handleSubmit} className="mt-10 w-full flex flex-col space-y-2">
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter your Email Address"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out" />
        </fieldset>
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Enter your Password"
            className="w-full rounded-md border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out" />
        </fieldset>
        <div className="flex flex-row items-center justify-between mt-2 text-sm">
          <fieldset className="space-x-1 flex flex-row items-center justify-start">
            <input
              type="checkbox"
              name="check"
              id="check"
              onChange={handleChange}
              value={formData.checkbox}
            />
            <label htmlFor="check">Remember me</label>
          </fieldset>
          <a href="/auth/forgot-password" className="text-orange-600">Forgot Password?</a>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 py-3 rounded-full text-white w-full text-center cursor-pointer bg-blue-900">Login into your Account</button>
      </form>
      <p className="text-center text-sm mt-6">Are you new here? {' '}
        <a href="/auth/signup" className="text-orange-500">Create Account</a>
      </p>
      <div className="mt-4 mb-4 flex flex-row items-center space-x-4 text-gray-500">
        <hr className="border-none bg-gray-300 w-full h-[2px]" />
        <span>Or</span>
        <hr className="border-none bg-gray-300 w-full h-[2px]" />
      </div>
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
  )
}

export default LoginForm
