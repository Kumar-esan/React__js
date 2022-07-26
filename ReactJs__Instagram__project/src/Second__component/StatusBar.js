import React, { useState, useEffect } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";
// import Carousel from "react-bootstrap/Carousel";
export default function StatusBar() {
  const [statusList, setStatusList] = useState([]);
  useEffect(() => {
    fetch("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        const val = data.slice(5, 20);
        setStatusList(val);
      });
  }, []);

  return (
    <div>
      <div className="statusbar__container">
        {statusList.map((item) => (
          <div className="status">
            <Avatar className="statusbar__status" src={item.avatar} />
            <div className="statusbar__text">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
