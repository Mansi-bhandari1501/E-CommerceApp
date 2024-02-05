import React from "react";
import "./ErrorPage.css"
// import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorpage-container">
      <svg
          className="left-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
            fill="black"
          />
        </svg>
    <div className="errorpage">
      <h1 className="error404">404</h1>
      <p className="para-1">Uh Oh! You're lost</p>
      <p className="para-2">
        The page you are looking for doesn't exist. How you got here is mystery.
        But you can click the button below to back to Home page
      </p>
      <div>
        <Link to='/'>
        <button>Home</button>
        </Link>
      </div>
    </div>
      <svg
          className="right-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
        >
          <path
            d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
            fill="black"
          />
        </svg>
    </div>
  );
}
export default ErrorPage;
