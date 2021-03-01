import React from 'react';
import './App.scss';
import Home from './screens/home/home';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500|Libre+Baskerville:400,400i" rel="stylesheet"></link>
        <Home />
      </div>
    );
  }
}

