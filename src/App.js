import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens//HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = selectUser;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logout
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
