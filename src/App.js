
import React from 'react';
import Header from './component/Header'
import Grid from "./component/Grid"

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter,Route, Switch} from "react-router-dom"
import Home from "./component/Home"
import Contact from "./component/Contact"
import About from "./component/About"
import PLP from "./component/PLP"
import PDP from "./component/PDP"
import Cart from "./component/Cart"

const App = () => {
  const path = process.env.PUBLIC_URL
  return ( 
    <BrowserRouter>
      <Grid/>
      <Switch>
      <Route path={`${path}/`} exact component={Home}/>
      <Route path={`${path}/contact`}  component={Contact}/>
      <Route path={`${path}/about`} component={About}/>
      <Route path={`${path}/cart`}  component={Cart}/>
      <Route path={`${path}/products`}  component={PLP}/>
      <Route path={`${path}/product/:id`} component={PDP}/>
      <Route component={()=><h1>404</h1>}/>
      </Switch>
      
      
    </BrowserRouter>
   );
};
 
export default App;