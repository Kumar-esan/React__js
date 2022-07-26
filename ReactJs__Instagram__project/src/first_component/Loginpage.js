import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Loginpage.css";
import inst_image from "./images/9364675fb26a.svg";
import insta_logo from "./images/logoinsta.png";
import fb from "./images/fb.png";
import appstore from "./images/app.png";
import playstore from "./images/play.png";
import Button from "react-bootstrap/Button";
import IndividualIntervalsExample from "./IndividualIntervalsExample.js";
function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //======== function creation ======
  const usernameInput = (event) => {
    setUsername(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  //=========jayavascript code ============

  let val1;
  let val2;
  var akp = [
    {
      username: "arun",
      password: "12345",
    },
    {
      username: "arunkumaresan55",
      password: "@Asd1234",
    },
  ];
  if (username && password) {
    val1 = username;
    val2 = password;
  }
  const changeHomepage = () => {
    if (val1 != "" && val2 != "") {
      if (akp.indexOf(val1) == -1 && akp.indexOf(val2) == -1) {
        for (var i = 0; i < akp.length; i++) {
          if (akp[i].username == val1 && akp[i].password == val2) {
            navigate("/Home");
          }
        }
      } else {
        alert("incorrect value");
      }
    } else {
      alert("Enter the value fully");
    }
  };

  //=============================

  return (
    <div>
      <div className="loginpage__main">
        <div className="loginpage__image" style={{ position: "relative" }}>
          <img src={inst_image} width="454px" />
          <IndividualIntervalsExample style={{ position: "absolute" }} />
        </div>
        <div>
          <div className="loginpage_rightcomponent">
            <img className="loginpage__logo" src={insta_logo} />
            <div className="loginPage__signin">
              <div className="sign__in">
                <input
                  className="logipage__text"
                  type="text"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={usernameInput}
                />
                <input
                  className="logipage__text"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={passwordInput}
                />
                <Button
                  variant="primary"
                  className="login__button"
                  onClick={changeHomepage}
                  disabled={!username || !password}
                >
                  Log in
                </Button>
              </div>
              <div className="login__ordiv">
                <div className="login__dividor"></div>
                <div className="login__or">OR</div>
                <div className="login__dividor"></div>
              </div>

              <div className="login__fb">
                <img src={fb} width="15px" style={{ marginRight: "5px" }} />
                <Link to="#"> Log in with Facebook </Link>
              </div>
              <Link to="#" className="login_forgt">
                {" "}
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="loginpage__signupoption">
            <div className="loginPage__signin">
              Don't have an account?{" "}
              <span style={{ fontWeight: "bold", color: "#0395F6" }}>
                Sign up
              </span>
            </div>
          </div>

          <div className="loginPage__downloadSection">
            <div>Get the app.</div>
            <div className="loginPage__option">
              <img className="loginPage_dwimg" src={appstore} width="136px" />
              <img className="loginPage_dwimg" src={playstore} width="136px" />
            </div>
          </div>
        </div>
      </div>
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
        </div>
        <br />
      </div>
    </div>
  );
}

export default LoginPage;
