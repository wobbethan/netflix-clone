import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens//HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebaseConfig";
import { useDispatch } from "react-redux";
import { logout, login } from "./features/userSlice";

function App() {
  const user = null;
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
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
