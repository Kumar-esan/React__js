import React from "react";
import "./NavBar.css";
import Grid from "@material-ui/core/Grid";
import insta_log from "./images/logoinsta.png";
import home from "./images/home.svg";
import message from "./images/message.svg";
import find from "./images/find.svg";
import react from "./images/love.svg";
import Avatar from "@material-ui/core/Avatar";
import pp from "./images/resume.jpg";
// import Like from "./Like.js";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar__barContent">
        <Grid container>
          <Grid item xs={2}>
            {" "}
          </Grid>
          <Grid item xs={1}>
            <img className="navbar_logo" src={insta_log} width="105px" />
          </Grid>
          <Grid item xs={5}>
            <input
              type="search"
              className="navbar__searchBar"
              placeholder="Search..."
            />
          </Grid>
          <Grid item xs={3} style={{ display: "flex" }}>
            <img className="navbar__img" src={home} width="25px" />
            <img className="navbar__img" src={message} width="25px" />
            <img className="navbar__img" src={find} width="25px" />
            <img
              className="navbar__img"
              src={react}
              width="25px"
              onClick={() => {
                navigate("/post");
              }}
            />
            <Avatar
              src={pp}
              className="navbar__img"
              style={{
                maxWidth: "25px",
                maxHeight: "25px",
                marginTop: "15px",
              }}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default NavBar;
