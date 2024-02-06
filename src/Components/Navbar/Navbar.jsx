import React from "react";
import { Link } from "react-router-dom";
import Socialmedia from "../Socialmedia/Socialmedia";
export default function Navbar({ userData, logOut }) {
  return (
    <nav className="p-2 flex-md-row flex-column d-flex justify-content-between">
      <div className="left-nav d-flex flex-md-row flex-column  align-items-center">
        <h1>
          <Link className="m-0 pe-0 fw-bolder" to="">
            Noxe
          </Link>
        </h1>
        {userData ? (
          <ul className="list-unstyled m-0 d-flex flex-md-row flex-column align-items-center">
            <li className="px-2">
              <Link to="home">Home</Link>
            </li>
            <li className="px-2">
              <Link to="about">About</Link>
            </li>
            <li className="px-2">
              <Link to="movies">Movies</Link>
            </li>
            <li className="px-2">
              <Link to="tv">TV</Link>
            </li>
            <li className="px-2">
              <Link to="people">People</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="right-nav flex-md-row flex-column d-flex align-items-center">
        <div className="social-media">
          <i className="fab mx-1 fa-facebook"></i>
          <i className="fab mx-1 fa-instagram"></i>
          <i className="fab mx-1 fa-spotify"></i>
          <i className="fab mx-1 fa-x"></i>
          <i className="fab mx-1 fa-youtube"></i>
        </div>
        <ul className="list-unstyled m-0 d-flex flex-md-row flex-column align-items-center">
          {userData ? (
            <>
              {" "}
              (
              <li className="px-2 cursor-pointer" onClick={logOut}>
                <span>LogOut</span>
              </li>
              <li className="px-2">
                <Link to="profile">Profile</Link>
              </li>
              )
            </>
          ) : (
            <>
              <li className="px-2">
                <Link to="login">Login</Link>
              </li>
              <li className="px-2">
                <Link to="register">Register</Link>
              </li>
              <li className="px-2">
                <Socialmedia />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
