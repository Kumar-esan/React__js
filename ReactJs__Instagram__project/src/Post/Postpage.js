import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "../Second__component/NavBar.js";
import useLocalStorage from "../Hooks/useLocalStorage.js";
import { Avatar } from "@material-ui/core";
import { BsThreeDots } from "react-icons/bs";
import db from "../Second__component/images/resume.jpg";
import "./Post.css";
import "../first_component/Loginpage.css";
export default function Postpage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("postpage"));
    if (items) {
      setItems(items);
      console.log(items);
    }
  }, []);
  return (
    <div className="Postpage__container">
      <NavBar />
      <br />
      <Grid container className="Postpage__Grid">
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Avatar src={db} className="postpage__db" />
        </Grid>
        <Grid item xs={3}>
          <ul className="postpage__list">
            <li>arunkumaresan55</li>
            <li>
              <button>Edit profile</button>
            </li>
            <li>2 posts</li>
            <li>59 followers</li>
            <li>274 following</li>
            <li>
              it's_arun_file
              <br />
              Trichy
              <br />
              www.google.com
            </li>
          </ul>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <hr />
      <ul className="post_ul">
        <li>post</li>
        <li>saved</li>
        <li>tagged</li>
      </ul>
      {/* ========mainpage content======== */}
      {items.map((item) => {
        return (
          <div className="post_map_container">
            <ul key={item.id}>
              <br />
              <img
                src={item.avatar}
                width="300px"
                height="300px"
                className="postpage__img"
              />
              <br />
            </ul>
          </div>
        );
      })}{" "}
      <div className="loginpage_bottom">
        <ul className="last_li">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Top accounts</li>
          <li>Hashtags</li>
          <li>Locations</li>
          <li>Instagram Lite</li>
          <li>Contact uploading and non-users</li>
        </ul>
        <div className="Loginpage__language">
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>tamil</option>
            <option>telugu</option>
          </select>{" "}
          &nbsp; © 2022 Instagram from Meta <br />
        </div>{" "}
        <br />
      </div>
    </div>
  );
}
