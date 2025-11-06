import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Layout from "@/layouts/Layout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register"
import Explore from "@/pages/explore/Explore";

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

  )
}

export default App
