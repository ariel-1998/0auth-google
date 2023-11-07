import React, { useState, useEffect } from "react";
import "./App.css";
import { UserModel } from "./models/UserModel";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const App: React.FC = () => {
  const [user, setUser] = useState<UserModel | null>(null);

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/auth/login/success`;
      const { data } = await axios.get<UserModel>(url, {
        withCredentials: true,
      });
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
