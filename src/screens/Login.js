import React from "react";
import { useState } from "react";
import SignupScreen from "./SignupScreen";
import "./Login.css";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="signin_button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="login_gradient" />
      </div>

      <div className="login_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login_button_START"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
