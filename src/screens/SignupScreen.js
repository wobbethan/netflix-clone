import React, { useRef } from "react";
import { auth } from "../firebase";
import "./signup.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="E-mail" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" className="signin_submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signup_gray">New to Netflix?</span>{" "}
          <span className="signup_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
