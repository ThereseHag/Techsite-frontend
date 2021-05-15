import React from "react";
import { Link } from "react-router-dom";

export const Documentation = () => {
  return (
    <>
      <Link to="/" className="button-back">
        <span className="arrow-box">&#x2B05; </span>
        <span className="back-link-text"> Back to main page</span>
      </Link>
      <div className="info-part">
        <h1>Techsites API</h1>
        <p className="info-text">
          This dataset contains information about techsites, mostly in the
          programming field.
        </p>
        <p className="info-text">
          This is a REST API and at the moment it only support GET requests.
        </p>
        <h2>Structure</h2>
        <h3>MainPage URL</h3>
        <a className="info-text" href="https://techsites.herokuapp.com/">
          https://techsites.herokuapp.com/
        </a>
        <p className="info-text">
          The main URL returns a list presenting all available endpoints
        </p>
        <h3>Endpoints</h3>
        <a
          className="text-info"
          href="https://techsites.herokuapp.com/techsites"
        >
          GET /techsites
        </a>
        <p className="text-info">
          This endpoint returns a JSON containing all techsites included in the
          dataset.
        </p>
        <a
          className="text-info"
          href="https://techsites.herokuapp.com/techsites/:id"
        >
          GET /techsites/:id
        </a>
        <p>
          This endpoint returns a JSON displaying one specific techsite with the
          id selected.
        </p>
        <a
          className="text-info"
          href="https://techsites.herokuapp.com/techsites/name/:name"
        >
          GET /techsites/name/:name
        </a>
        <p className="text-info">
          This endpoint returns a JSON displaying one specific techsite with the
          name specified.
        </p>
        <a
          className="text-info"
          href="https://techsites.herokuapp.com/techsites/type/:type"
        >
          GET techsites/type/:type
        </a>
        <p className="text-info">
          This endpoint returns a JSON containing all techsites of a specific
          type, such as learning platform, blog etc.
        </p>
        <a
          className="text-info"
          href="https://techsites.herokuapp.com/techsites/language/:language"
        >
          GET /techsites/language/:language
        </a>
        <p className="text-info">
          This endpoint returns a JSON presenting all techsites in your selected
          language.
        </p>
        <h3>Query parameters</h3>
        <p className="text-info">
          The query parameters can be applied to /techsites to filter data if
          you want to get techsites with a specific topic, such as forum, code
          challenges, blog posts etc.
        </p>
        <p className="text-info">
          This can be achieved by using the following (adding the topic you're
          looking for after the equal sign):
          <p className="text-info">
            {" "}
            <a href="https://techsites.herokuapp.com/techsites?topic=">
              GET / techsites?topic={" "}
            </a>{" "}
          </p>
        </p>
      </div>
    </>
  );
};
