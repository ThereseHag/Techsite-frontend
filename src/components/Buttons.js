import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({ type }) => {
  return (
    <div className="button-container">
      <Link to="Blogs">
        <button className="button">Blogs</button>
      </Link>
      <Link to="Challenges">
        <button className="button">Code challenges</button>
      </Link>
      <Link to="Repository">
        <button className="button">Code repository sites</button>
      </Link>
      <Link to="Kids">
        <button className="button">Coding for Kids</button>
      </Link>
      <Link to="Guide">
        <button className="button">Coding guides</button>
      </Link>
      <Link to="Communities">
        <button className="button">Communities</button>
      </Link>
      <Link to="Education">
        <button className="button">Education platforms</button>
      </Link>
      <Link to="Learning">
        <button className="button">Learning platforms</button>
      </Link>
      <Link to="Tech">
        <button className="button">Tech articles</button>
      </Link>
      <Link to="Youtube">
        <button className="button">Youtube channels</button>
      </Link>

      <Link to="Documentation">
        <button className="button">API docs</button>
      </Link>
    </div>
  );
};

export default Buttons;
