import React, { Component } from 'react';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
//import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
//import axios from './axios-orders';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
// setting globally application wise error handling
// but max says set it to each component with unmount
//export default withErrorHandler(App, axios);

