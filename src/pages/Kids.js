import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Kids = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/kids")
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
          Those websites are created to help kids and teenagers who wants to
          start coding. They offer courses, games and fun, interactive learning
          possibilities.
        </p>

        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the kids
          coding website.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
