import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends Component {

  petPath = () => {
    this.props.history.push('/pet-dashboard');
  }

  ownerPath = () => {
    this.props.history.push('/owner-dashboard');
  }

   render() {
       return (
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">The DoubleFlea Hotel</h1>
          <h4><i>Cheap Fees, Cheaper Service!</i></h4>
        </header>
        
        <button onClick={this.petPath} >Pet Dashboard</button>
        <button onClick={this.ownerPath} >Owner Dashboard</button>
       </div>
       )
   }
}

export default withRouter(Header);