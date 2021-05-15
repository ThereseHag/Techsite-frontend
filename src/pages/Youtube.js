import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Youtube = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/youtube")
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
          If you prefer to learn by watching videos, then you're up for a treat.
          On these Youtube channels, you'll be able to find a great amount of
          video lessons.
        </p>
        <p className="info-text">
          Some of the videos are thorough tutorials, while other tend to give
          you some great advice on how to use libraries and tools to its full
          potential.
        </p>

        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the
          channel of your choice.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
