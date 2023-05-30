import React from "react";
import "./profileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function ProfileScreen() {
  const user = useSelector;
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1 className="">Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
        <div className="profileScreen_details">
          <h2>{user.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
