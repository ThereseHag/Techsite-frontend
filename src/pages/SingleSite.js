import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleSite = () => {
  const { _id } = useParams();
  const [siteDetails, setSiteDetails] = useState({});

  useEffect(() => {
    fetch(`https://techsites.herokuapp.com/techsites/${_id}`)
      .then((response) => response.json())
      .then((json) => setSiteDetails(json));
  }, [_id]);

  return (
    <>
      <div className="main-wrapper">
        <div className="the-background">
          <Link to="/" className="button-back">
            <span className="arrow-box">&#x2B05; </span>
            <span className="back-link-text"> Back to main page</span>
          </Link>

          <div className="information">
            <div className="site-info">
              <h1 className="site-details-title">{siteDetails.name}</h1>
              <p>
                <b>On this website you can expect to find:</b>{" "}
                {siteDetails.topic}.
              </p>
              <p className="summary">
                <b>A short description of the website:</b>{" "}
                {siteDetails.description}
              </p>
              <p>
                <b>Free / paid plans:</b> {siteDetails.free_or_paid}.
              </p>
              <p>
                {" "}
                <a href={siteDetails.url}>
                  Visit the website{" "}
                  <span role="img" aria-label="computer">
                    {" "}
                    💻{" "}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
