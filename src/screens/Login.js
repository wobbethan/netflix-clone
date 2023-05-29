import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="loginScreen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="login_button">Sign in</button>
        <div className="login_gradient" />
      </div>

      <div className="login_body">
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
              <button className="login_button_START">GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default Login;
