import { Avatar} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import "./Home.css";
import Search from "../components/Search";


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="#" >About</Link>
          <Link to="#">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="#">Gmail</Link>
          <Link to="/#">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search hiddenButtons/>
        </div>
      </div>
    </div>
  );
}

export default Home;
