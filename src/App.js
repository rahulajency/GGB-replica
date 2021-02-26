import React from 'react';
import './App.scss';
import Home from './screens/home/home';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

