import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Hello } from './components/Hello';
import { Clock } from './components/Clock';
import { Toggle } from './components/Toggle';
import { LoginControl } from './components/LoginControl';
import { Game } from './components/Game';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/hello' component={Hello} />
        <Route path='/clock' component={Clock} />
        <Route path='/toggle' component={Toggle} />
        <Route path='/game' component={Game} />
        <Route path='/login' component={LoginControl} />        
      </Layout>
    );
  }
}
