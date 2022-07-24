import React, { Component } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";
// import Carousel from "react-bootstrap/Carousel";
class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        const val = data.slice(30, 50);
        console.log(val);
        this.setState({ statusList: val });
      });
  };

  render() {
    return (
      <div>
        <div className="statusbar__container">
          {this.state.statusList.map((item, index) => (
            <div className="status">
              {/* <Carousel slide={false}>
                <Carousel.Item>
                  {" "} */}
              <Avatar className="statusbar__status" src={item.avatar} />
              <div className="statusbar__text">{item.name}</div>
              {/* </Carousel.Item>
              </Carousel> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StatusBar;
