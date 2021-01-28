import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Convert from '../Convert/Convert';
import About from '../About/About'


class Main extends React.Component{

  render(){
    return (
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/convert">
            <Convert />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Main;