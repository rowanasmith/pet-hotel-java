import React from 'react';
import './App.css';
import Header from "../Header/Header";
import PetDashboard from '../PetDashboard/PetDashboard';
import OwnerDashboard from '../OwnerDashboard/OwnerDashboard';

function App() {
  return (
    <div >

      <Header /> 
      <OwnerDashboard /> 
      <PetDashboard />

    </div>
  );
}

export default App;
