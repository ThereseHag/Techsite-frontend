import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import SiteList from 'components/SiteList'
import { SingleSite } from './pages/SingleSite'

export const App = () => {
  return (

    <div>
      <Header />
      <div className="main-box">
      <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <SiteList />
        </Route>
        <Route path='/techsites/:_id'>
          <SingleSite />
          
        </Route>
        </Switch>
        </BrowserRouter>
        </div>
    </div>
    
  )
}
