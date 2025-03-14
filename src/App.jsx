import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Verification from "./pages/auth/verification";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth/signup" element={<SignUp />}/>
      <Route path="/auth/login" element={<Login />}/>
      <Route path="/auth/verification" element={<Verification />}/>
      <Route path="/auth/forgot-password" element={<ForgotPassword />}/>
      <Route path="/auth/reset-password" element={<ResetPassword />}/>
    </Routes>
  )
}

export default App;