import React, { useState } from "react";
import { BiSmile } from "react-icons/bi";
import Grid from "@material-ui/core/Grid";
import "./Comment.css";
import Heart from "react-heart";
import useLocalStorage from "../Hooks/useLocalStorage.js";
const Comment = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");
  const handleChangeone = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (input !== "") {
      const tod = [...todos];
      const todo = {
        id: Math.random(),
        task: input,
      };
      todos.push(todo);
      setTodos(todos);
      setInput("");
    }
    e.preventDefault();
  };

  return (
    <div>
      <ul
        width="100%"
        style={{
          listStyleType: "none",
          marginRight: "200px",
          marginBottom: "10px",
        }}
      >
        {todos.map((item) => {
          return (
            <Grid container className="Comment__Grid">
              <Grid item xs={4}>
                arunkumaresan55
              </Grid>
              <Grid item xs={6} className="Comment__Grid__Item2">
                {item.task}
              </Grid>
              <Grid item xs={1}>
                {/* <AiOutlineHeart /> */} <Heart__Like />
              </Grid>
            </Grid>
          );
        })}
      </ul>
      <Grid container className="last_page">
        <Grid item xs={1}>
          <BiSmile style={{ fontSize: "25px" }} />
        </Grid>
        <Grid item xs={9}>
          <input
            type="text"
            placeholder="Comments...."
            className="Comment__Search"
            value={input}
            onChange={handleChangeone}
          />
        </Grid>
        <Grid item xs={2}>
          <a href="#" onClick={handleSubmit} style={{ textDecoration: "none" }}>
            post
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
export default Comment;

function Heart__Like() {
  const [active, setActive] = useState(false);
  return (
    <Heart
      isActive={active}
      onClick={() => setActive(!active)}
      style={{ width: "15px" }}
    />
  );
}
