import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Contact from './form/Contact';
import Reply from './form/Reply';
import Home from './core/Home';
import Menu from './core/Menu';

function Routes() {
    return (
       <BrowserRouter>
          <Menu />
          <Switch>
              <Route path='/contact' exact component={Contact}/>
              <Route path='/reply' exact component={Reply}/>
              <Route path='/' exact component={Home}/>
          </Switch>
       </BrowserRouter>
    )
}

export default Routes
