import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./InfoSection.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import imageSrc from "./images/pp1.png";
//import Follow from "./Follow.js";
function InfoSection() {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <br />
      <Grid container className="info_content">
        <Grid item xs={4}>
          <Avatar src={imageSrc} className="info__image" />
        </Grid>
        <Grid item xs={3}>
          <div className="info_username"> arunkumaresan55</div>
          <div className="info_description"> Description</div>
        </Grid>
        <Grid item xs={5}>
          <a
            href="/"
            style={{ textDecoration: "none", float: "right" }}
            onClick={() => {
              navigate("/");
            }}
          >
            switch
          </a>
        </Grid>
      </Grid>

      <Grid className="info__headline">
        <Grid item xs={7}>
          Suggestion for you
        </Grid>
        <Grid item xs={5}>
          see all
        </Grid>
      </Grid>
    </div>
  );
}

export default InfoSection;
