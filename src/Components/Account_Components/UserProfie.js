import React from "react";
import "./User_Profile.css";
import { Link } from "react-router-dom";
function UserProfie() {
  return (
    <div className="user_prfie">
      <div className="account-nav">
        <h3>Account</h3>
        <Link to="/public-Profile">
          <h2 className="add-profie">Public Profile</h2>
        </Link>
        <h2>Notification</h2>
        <h2>Privacy and Policy</h2>
      </div>
      <div className="login-nav">
        <h3>Login</h3>
        <Link to="/add-accont">
          <h2 className="add-profie">Add Account</h2>
        </Link>
        <Link to="/logout">
          <h2 className="add-profie">Logout</h2>
        </Link>
      </div>
    </div>
  );
}

export default UserProfie;
