import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "@/pages/home/Home";
import Layout from "@/layouts/Layout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Explore from "@/pages/explore/Explore";
import { useAuthStore } from "./stores/auth.store";
import { useEffect, type JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, role } = useAuthStore();
  if (!isAuthenticated || role !== "user") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticated = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, role } = useAuthStore();
  if (isAuthenticated && role === "user") {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) return <span>Loading...</span>;

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectAuthenticated>
              <Login />
            </RedirectAuthenticated>
          }
        />
        <Route
          path="/register"
          element={
            <RedirectAuthenticated>
              <Register />
            </RedirectAuthenticated>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
