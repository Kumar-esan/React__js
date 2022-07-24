import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Card from "react-bootstrap/Card";
import { Avatar } from "@material-ui/core";
import { BsThreeDots } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import Like from "./Like.js";
import Grid from "@material-ui/core/Grid";
import useLocalStorage from "../Hooks/useLocalStorage.js";
// import Like from "./Like.js";
import Comment from "./Comment.js";
import { AnimatedSocialIcon } from "react-animated-social-icons";
export default function MainPage() {
  const [statusList, setStatusList] = useLocalStorage("api", []);
  const [array__New, setArray__New] = useState([]);
  const [updateArray, setUpdateArray] = useState([]);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://629c61fae9358232f75a0851.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        const val = data.slice(5, 20);
        setStatusList(val);
        //console.log(val);
        //this.setState({ statusList: val });
      });
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(array__New));
  // }, [array__New]);
  const bookmarkChange = (val) => {
    if (array__New.indexOf(val) == -1) {
      array__New.push(val);
      setArray__New(array__New);
      console.log("newArray vlaue is", array__New);
      console.log("orginal vlaue is", val);
      localStorage.setItem("postpage", JSON.stringify(array__New));
    } else {
      alert("duplicate value");
      val = " ";
      console.log("dublicate vlaue is", val);
    }
  };
  // const ChangeArray = () => {
  //   const result = newArray.reduce((finalArray, current) => {
  //     let obj = finalArray.find((item) => item.id === current.id);
  //     // return the obt item = true
  //     // underfined = flase
  //     if (obj) {
  //       return finalArray;
  //     } else {
  //       return finalArray.concat([current]);
  //     }
  //   }, []);
  //   console.log("result ", result);
  // };
  // }
  //  const bookmarkChange = (val) => {

  //     console.log("val id is ", val);
  //     this.setState({ newArray: [...this.state.newArray, { val }] });
  //     //  console.log("the array vlaue is", this.state.newArray);
  //     const Uniusers = [
  //       ...this.state.newArray
  //         .reduce((map, obj) => map.set(obj.id, obj), new Map())
  //         .values(),
  //     ];
  //     console.log(Uniusers);
  //     let obt = Uniusers[0].val;
  //     console.log("obtt", obt);
  //     if (val != obt) {
  //       this.setState({ updateArray: [...this.state.updateArray, { obt }] });
  //     }

  //     // console.log("update", this.state.updateArray);
  //     const realColors = this.state.updateArray.filter(function (e) {
  //       return e != null;
  //     });
  //     console.log("real color", realColors);
  //     var index = localStorage.length;
  //     var Name = [];
  //     localStorage.setItem(Name[index], JSON.stringify(realColors));
  //   };
  return (
    <div className="MainPage-container">
      {statusList.map((item) => {
        // const [value1, setvalue1] = useState(item.id);
        //console.log(value1);
        return (
          <ul key={item.id}>
            <Card className="Card__container">
              <Card.Body>
                <span as="h6">
                  <p
                    style={{
                      float: "left",
                      display: "flex",
                      alignItems: "center",
                      margin: "10px",
                    }}
                  >
                    {" "}
                    <Avatar src={item.avatar} className="MainPage__Top" />
                    <div className="MainPage__Top"> {item.name}</div>
                  </p>
                  <BsThreeDots className="Card_Right" />
                </span>
                <br />
                <img src={item.avatar} width="100%" height="300px" />
                <br />

                <Grid container style={{ fontSize: "30px", width: "150%" }}>
                  <Grid xs={1}>
                    {/* <AiOutlineHeart style={{ margin: "0px 10px" }} /> */}
                    <Like Text={item.id} />
                  </Grid>
                  <Grid xs={0}>
                    <BiMessageRounded style={{ margin: "0px 10px" }} />
                  </Grid>
                  <Grid item xs={0}>
                    <TbBrandTelegram style={{ margin: "0px 10px" }} />
                  </Grid>
                  <Grid item xs={9}>
                    {" "}
                    <AnimatedSocialIcon
                      brandName="github"
                      animation="bounce"
                      defaultColor="#D1D1D1"
                      hoverColor="black"
                      width="1em"
                      animationDuration={0.8}
                      style={{ padding: "5em" }}
                      onClick={() => {
                        bookmarkChange(item);
                      }}
                    />
                    {/* <MdOutlineBookmarkBorder
                      onClick={() => {
                        bookmarkChange(item);
                      }}
                    /> */}
                    {/* <Bookmark
                        className="coolClass"
                        href="/cool/path"
                        title="My Cool Website"
                      /> */}
                  </Grid>
                </Grid>

                <Comment />
              </Card.Body>
            </Card>
          </ul>
        );
      })}
    </div>
  );
}
