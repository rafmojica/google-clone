import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";

function Home() {
  function alertUser() {
    alert("Sorry! I don't plan on implementing this.");
  }
  return (
    <div className="home">
      <nav className="nav__header">
        <div className="nav__headerLeft">
          <Link onClick={alertUser}>About</Link>
          <Link onClick={alertUser}>Store</Link>
        </div>
        <div className="nav__headerRight">
          <Link onClick={alertUser}>Gmail</Link>
          <Link onClick={alertUser}>Images</Link>
          <AppsIcon onClick={alertUser} className="icon" />
          <AccountCircleIcon onClick={alertUser} className="icon userIcon" />
        </div>
      </nav>
      <div className="home__body">
        <img
          src="https://www.searchenginewatch.com/wp-content/uploads/2018/10/notogoogle-1.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
