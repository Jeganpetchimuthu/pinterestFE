import React, { useState } from "react";
import "./Profile.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import Image from "./Image/baby.jpg";
import { Link } from "react-router-dom";
//import axios from "axios";

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  // const [profiles, setProfiles] = useState({
  //   FirstName: "",
  //   SureName: "",
  //   userName: "",
  // });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/profile")
  //     .then((res) => setProfiles(res.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="Profile">
      <Link to="/setting">
        <MoreHorizIcon className="MoreIcon" />
      </Link>
      <Avatar className="Avatar">
        <img className="img" src={Image} alt="avathar" />
      </Avatar>
      <br></br>
      <br></br>
      <br></br>
      <form>
        <span className="profile_name">arun</span>
        <span className="profile_names">jegan </span>
        <br></br>
        <br></br>
        <span className="profile-username"> jegan123</span>
      </form>
      <br></br>

      {/* {profiles.map((profile) => {
        return (
          <div key={profile._id}>
            <form>
              <h1 className="profile_name">{profile.FirstName}</h1>
              <h1 className="profile_name">{profile.SureName}</h1>
              <h4 className="profile-username">{profile.userName}</h4>
            </form>
          </div>
        );
      })} */}

      <span className="profile_follower">
        <span className="pf_1" onClick={() => setFollowers(followers + 1)}>
          {followers}.followers
        </span>
        <span className="pf_2" onClick={() => setFollowing(following + 1)}>
          {following}.following
        </span>
      </span>
      <br></br>
      <input
        className="input_box"
        type="searchbox"
        placeholder="Search Your Pin"
      />
      <SearchOutlinedIcon className="icon" />
    </div>
  );
}

export default Profile;
