import React, { Component } from 'react';
import NavBar from './navBar';

class App extends Component {

  render(){
    return(
      <div>
        <NavBar />
        <h6>
          App
        </h6>
        <p>
          Here we can show different options like questions sorted by votes, questions sorted by dates, etc..
        </p>
      </div>
    );
  }
}

export default App;
