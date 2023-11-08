import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { useUser } from "./context/UserProvider";

const App: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={!!user ? <Home user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!!user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={!!user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
};

export default App;
