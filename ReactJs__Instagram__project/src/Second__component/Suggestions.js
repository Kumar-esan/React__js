import React, { useState, useEffect } from "react";
import "./Suggestions.css";
import useLocalStorage from "../Hooks/useLocalStorage.js";
import { Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
export default function Suggestions() {
  const [statusList, setStatusList] = useState([]);
  const [follow_one, setFollow_one] = useLocalStorage("follow_one", "follow");
  const [follow_two, setFollow_two] = useLocalStorage("follow_two", "follow");
  const [follow_three, setFollow_three] = useLocalStorage(
    "follow_three",
    "follow"
  );
  const [follow_four, setFollow_four] = useLocalStorage(
    "follow_four",
    "follow"
  );
  const [follow_five, setFollow_five] = useLocalStorage(
    "follow_five",
    "follow"
  );

  useEffect(() => {
    fetch("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        const val = data.slice(43, 48);
        setStatusList(val);
      });
  }, []);

  return (
    <div>
      <Grid container className="Suggestions__followers">
        <Grid item xs={10}>
          <br />
          {statusList.map((item) => {
            return (
              <ul key={item.id}>
                <Grid container>
                  <Grid item xs={3}>
                    <Avatar src={item.avatar} />
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "left" }}>
                    {item.name}
                  </Grid>
                </Grid>
              </ul>
            );
          })}
        </Grid>
        <Grid item xs={2}>
          <ul className="Suggestion___follow__button">
            <li
              onClick={() => {
                if (follow_one == "follow") {
                  setFollow_one("followed");
                } else {
                  setFollow_one("follow");
                }
              }}
            >
              <Link to="#">{follow_one}</Link>
            </li>
            <li
              className="Suggestion__follow__button"
              onClick={() => {
                if (follow_two == "follow") {
                  setFollow_two("followed");
                } else {
                  setFollow_two("follow");
                }
              }}
            >
              <Link to="#">{follow_two}</Link>
            </li>
            <li
              className="Suggestion__follow__button"
              onClick={() => {
                if (follow_three == "follow") {
                  setFollow_three("followed");
                } else {
                  setFollow_three("follow");
                }
              }}
            >
              <Link to="#">{follow_three}</Link>
            </li>
            <li
              className="Suggestion__follow__button"
              onClick={() => {
                if (follow_four == "follow") {
                  setFollow_four("followed");
                } else {
                  setFollow_four("follow");
                }
              }}
            >
              <Link to="#">{follow_four}</Link>
            </li>
            <li
              className="Suggestion__follow__button"
              onClick={() => {
                if (follow_five == "follow") {
                  setFollow_five("followed");
                } else {
                  setFollow_five("follow");
                }
              }}
            >
              <Link to="#">{follow_five}</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
      <ul>
        <p className="Suggestions__bottom">
          About - HelpPress - API - Jobs - Privacy - Terms - Locations
          <br />
          Language
        </p>
        <p className="Suggestions__bottom">© 2022 INSTAGRAM FROM META</p>
      </ul>
    </div>
  );
}
