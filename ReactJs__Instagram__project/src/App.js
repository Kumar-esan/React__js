import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Second__component/Home.js";
import Loginpage from "./first_component/Loginpage.js";
import Postpage from "./Post/Postpage.js";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Routes>
              <Route exact path="/" element={<Loginpage />}></Route>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route exact path="/post" element={<Postpage />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
        {/* <In /> */}
      </div>
    );
  }
}

export default App;
