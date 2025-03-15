import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Verification from "./pages/auth/verification";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import Dashboard from "./pages/dashboard/dashboard";
import Courses from "./pages/dashboard/courses";
import MyLearning from "./pages/dashboard/my-learning"
import MyLibrary from "./pages/dashboard/my-library"
import Profile from "./pages/dashboard/profile"
import Notifications from "./pages/dashboard/notifications"
import Settings from "./pages/dashboard/settings"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth/signup" element={<SignUp />}/>
      <Route path="/auth/login" element={<Login />}/>
      <Route path="/auth/verification" element={<Verification />}/>
      <Route path="/auth/forgot-password" element={<ForgotPassword />}/>
      <Route path="/auth/reset-password" element={<ResetPassword />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path="/my-learning" element={<MyLearning />}/>
      <Route path="/my-library" element={<MyLibrary />}/>
      <Route path="/notifications" element={<Notifications />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/settings" element={<Settings />}/>
    </Routes>
  )
}

export default App;