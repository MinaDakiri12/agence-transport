import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Contact from './form/Contact';
import Home from './core/Home';
import Menu from './core/Menu';

function Routes() {
    return (
       <BrowserRouter>
          <Menu />
          <Switch>
              <Route path='/contact' exact component={Contact}/>
              <Route path='/' exact component={Home}/>
          </Switch>
       </BrowserRouter>
    )
}

export default Routes
