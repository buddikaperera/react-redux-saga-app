import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './style.css';

import { Provider } from 'react-redux';
import { getStore } from './store';

import Layout from './components/Layout';

const store = getStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
