import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SiteCard from "components/SiteCard";

export const Education = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites/type/education")
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
          On the websites in this category, you'll be able to choose from
          hundreds of educations. Some of them are in programming, some of them
          in other fields.
        </p>
        <p className="info-text">
          Since there are so many platforms offering both shorter courses and
          programs, you will be able to find something well suited for you,
          whether you're interested in learning one single programming language,
          or if your goal is to become a fullstack developer or maybe a UX
          designer.
        </p>
        <p className="info-text">
          Some courses are completely free, while some comes with a cost. It's
          also quite common that you can take a course for free, but have to pay
          in case you want a certificate after finishing the course.
        </p>
        <p className="info-text">
          Click on each card for a short summary of what you can expect from
          each site, and to find a link that will take you directly to the
          education platform of your choice.
        </p>
      </div>

      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  );
};
