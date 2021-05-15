import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import SiteList from "components/SiteList";
import { SingleSite } from "./pages/SingleSite";
import { Kids } from "pages/Kids";
import { Blogs } from "pages/Blogs";
import { Challenges } from "pages/Challenges";
import { Learning } from "pages/Learning";
import { Education } from "pages/Education";
import { Youtube } from "pages/Youtube";
import { Tech } from "pages/Tech";
import { Communities } from "pages/Communities";
import { Guide } from "pages/Guide";
import { Repository } from "pages/Repository";
import { Documentation } from "pages/Documentation";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="main-box">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <SiteList />
            </Route>
            <Route path="/techsites/:_id">
              <SingleSite />
            </Route>
            <Route path="/Kids">
              <Kids />
            </Route>
            <Route path="/Blogs">
              <Blogs />
            </Route>
            <Route path="/Challenges">
              <Challenges />
            </Route>
            <Route path="/Learning">
              <Learning />
            </Route>
            <Route path="/Education">
              <Education />
            </Route>
            <Route path="/Youtube">
              <Youtube />
            </Route>
            <Route path="/Tech">
              <Tech />
            </Route>
            <Route path="/Communities">
              <Communities />
            </Route>
            <Route path="/Guide">
              <Guide />
            </Route>
            <Route path="/Repository">
              <Repository />
            </Route>
            <Route path="/Documentation">
              <Documentation />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};
