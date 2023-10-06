import React, { useState } from "react";
import "./PublicProfile.css";

import axios from "axios";

function PublicProfile() {
  const [Profile, setProfile] = useState([
    {
      FirstName: "",
      SureName: "",
      UserName: "",
    },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/profile", {
        Profile,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="public_profile">
      <form className="form_container" onSubmit={handleSubmit}>
        <label className="lable-content" htmlFor="FirstName">
          FirstName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={Profile.FirstName}
            onChange={(e) => {
              setProfile(e.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="FirstName">
          SureName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="SureName"
            placeholder="SureName"
            value={Profile.SureName}
            onChange={(e) => {
              setProfile(e.target.value);
            }}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="UserName">
          UserName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="UserName"
            placeholder="UserName"
            value={Profile.UserName}
            onChange={(e) => {
              setProfile(e.target.value);
            }}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button className="done-btn" type="submit">
          Done
        </button>
      </form>
    </div>
  );
}

export default PublicProfile;
