import React, { Component } from "react";
import "./Home.css";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <MainContent />
      </div>
    );
  }
}

export default Home;
