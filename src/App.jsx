import { Router, Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes path="/" element={<Home />}/>
    </Router>
  )
}

export default App;