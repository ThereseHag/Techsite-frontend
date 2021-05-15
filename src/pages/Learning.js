import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Learning = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/learning")
      .then((response) => response.json())
      .then((json) => setSites(json));
  }, []);

  return (
    <>
      <Link to="/" className="button-back">
        <span className="arrow-box">&#x2B05; </span>
        <span className="back-link-text"> Back to main page</span>
      </Link>
      <div className="info-part">
        <p className="info-text">
          Those websites are created for everyone who wants to either learn
          coding from scratch, or wants to develop and expand their skills. You
          can find plenty of great coding courses on these websites.
        </p>
        <p className="info-text">
          Since there are so many platforms offering programming courses, you
          will be able to find something well suited for you, whether you're
          interested in learning one single programming language, or if your
          goal is to become a fullstack developer.
        </p>
        <p className="info-text">
          Some courses are completely free, while some comes with a cost.
        </p>
        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the
          learning platform of your choice.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
