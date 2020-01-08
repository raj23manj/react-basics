import React, { Component } from 'react';
import Layout from './hoc/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import withErrorHandler from './hoc/withErrorHandler/withErrorHandler';
import axios from './axios-orders';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
// setting globally application wise error handling
//export default withErrorHandler(App, axios);

