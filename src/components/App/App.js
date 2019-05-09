import React from 'react';
import {HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "../Header/Header";
import PetDashboard from '../PetDashboard/PetDashboard';
import OwnerDashboard from '../OwnerDashboard/OwnerDashboard';

function App() {
  return (
    <Router>
      <Header /> 

      <div >
        <Route path="/owner-dashboard" component={OwnerDashboard} />
        <Route path="/pet-dashboard" component={PetDashboard} />

      </div>

    </Router>
  );
}

export default App;
