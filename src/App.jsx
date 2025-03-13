import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/auth/signup" element={<SignUp />}/>
      <Route path="/auth/login" element={<Login />}/>
    </Routes>
  )
}

export default App;