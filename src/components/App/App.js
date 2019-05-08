import React from 'react';
import './App.css';
import Header from "../Header/Header";
import OwnerForm from "../AddOwner/addOwner"; 
import PetDashboard from '../PetDashboard/PetDashboard';

function App() {
  return (
    <div >

      <Header /> 
      <OwnerForm /> 
      <PetDashboard />

    </div>
  );
}

export default App;
