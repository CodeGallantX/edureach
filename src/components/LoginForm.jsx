import { FaChevronLeft } from "react-icons/fa6"

const LoginForm = () => {
  return (
    <div className="px-6 py-20 md:px-10 w-full flex flex-col items-start justify-start md:justify-center">
      <FaChevronLeft className="font-bold text-3xl bg-gray-200 text-gray-400 p-2 rounded-full" />
      <h2 className="text-2xl font-bold">Welcome, Please Login</h2>
      <p className="text-gray-500">Enter your credentials to access your account</p>

      <form className="mt-6 w-full flex flex-col gap-2">
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="Enter your Email Address" className="w-full rounded border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out" />
        </fieldset>
        <fieldset className="space-y-1 flex flex-col items-start justify-start">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full rounded border border-gray-500/50 text-sm py-3 px-3 outline-none focus:border-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out" />
        </fieldset>
        <div className="flex flex-row items-center justify-between mt-2">
          <fieldset className="space-x-1 flex flex-row items-center justify-start">
            <input type="checkbox" name="check" id="check" />
            <label htmlFor="check">Remember me</label>
          </fieldset>
          <a href="/auth/forgot-password" className="text-orange-600">Forgot Password</a>
        </div>
        <button type="submit" className='mt-2 py-3 rounded-full bg-black text-white w-full text-center cursor-pointer'>Login into your Account</button>
      </form>
    </div>
  )
}

export default LoginForm
