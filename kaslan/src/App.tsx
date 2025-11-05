import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import Layout from "@/layouts/Layout";

function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />

        </Route>
      </Routes>
    </Router>

  )
}

export default App
