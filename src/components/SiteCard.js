import React from 'react'
import { Link } from 'react-router-dom'


const SiteCard = ({ name, type, language, siteId, programming_language, free_or_paid, url, topic }) => {
    return (
      <> 
      <Link to={`/techsites/${siteId}`}>
          <div className="site-details">
            
            <h2>{name}</h2>
            <p><b>Type of website:</b> {type}</p>
            <p><b>Language:</b> {language}</p>
            <p><b>Covers programming languages:</b> {programming_language}</p>
            <p><b>Free / paid:</b> {free_or_paid}</p>
          </div>
          </Link>

          </>
    )
}

export default SiteCard