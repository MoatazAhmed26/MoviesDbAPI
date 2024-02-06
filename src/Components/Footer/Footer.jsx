import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Footer({ userData }) {
  return (
    <footer className="bg-black text-white p-2 d-xxl-flex justify-content-center align-items-center">
      <div className="container list-unstyled w-100 m-0 pt-4 d-xxl-flex flex-xxl-column  justify-content-xxl-center align-items-xxl-center text-decoration-none mb-4">
        <h1>
          <Link className="m-0 pe-0 fw-bolder" to="">
            Noxe
          </Link>
        </h1>
        {userData ? (
          <ul className="list-unstyled w-100 m-0 pt-4 d-xxl-flex flex-xxl-column justify-content-center align-items-center text-decoration-none mb-4">
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
          <ul className="list-unstyled w-100 m-0 pt-4 d-xxl-flex flex-xxl-column justify-content-center align-items-center text-decoration-none mb-4">
            <li className="px-2">
              <Link to="about">About</Link>
            </li>
            <li className="px-2">
              <Link to="profile">Account</Link>
            </li>
          </ul>
        )}
      </div>
    </footer>
  );
}
