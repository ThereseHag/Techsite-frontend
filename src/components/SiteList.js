import React, { useState, useEffect } from "react"

import SiteCard from "components/SiteCard"

const SiteList = () => {
  const [sites, setSites] = useState([])

  useEffect(() => {
    fetch("https://techsites.herokuapp.com/techsites")
      .then((response) => response.json())
      .then((json) => setSites(json))
  }, [])

  return (
    <>
      <div className="info-part">
        <p className="info-text">
          Whether you're working full time as a developer and has done so for decades, or you're a beginner when it comes to coding, you will be able to find useful coding resources here.
        </p>
        <p className="info-text">
          Find a course or a program that can help you become a developer, find some great tutorials that can explain things you've struggled with for days, or find some great coding friends to discuss with online. 
        </p>
        <p className="info-text">
          You will find great websites where you can take on challenges, coding competitions, informative and entertaining blog posts and much more. 
        </p>
        <p className="info-text">
         The only thing you have to do in order to get started is to figure out what you actually want to start with. Are you up for a challenge? Or is it competition time perhaps? It's all up to you....
        </p>
        <p className="info-text">
          Click on each card in order to find out more details about that specific resource. You're up for a lot of fun!
        </p>
      </div>
      <div className="site-card-container">
        {sites && sites.map((site) => <SiteCard {...site} key={site._id} />)}
      </div>
    </>
  )
}

export default SiteList