import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Challenges = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/challenges")
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
          Are you up for some challenges? Then those are the sites for you. Take
          on new code challenges every day, and improve your coding skills in a
          fun way.
        </p>
        <p className="info-text">
          Most of the code challenge websites will allow you to choose a
          complexity level that suits you. That means you can start practising
          when you're a total beginner and continue even when you've worked as a
          developer for years.
        </p>

        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the
          challenge site you're interested in.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
