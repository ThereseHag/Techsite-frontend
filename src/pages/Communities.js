import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Communities = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/community")
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
          Those are coding communities, where you will be able to discuss coding
          related matters with other developers. You will also be able to ask
          all your questions when you face some difficulties that you can't
          solve. The chance is big that you'll get some clearifying answers
          within minutes, or at least hours. Whatever programming language
          you're working with, and whatever library and tool you're using, the
          developers on these communities will be able to help and give advice.
        </p>

        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the
          community.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
