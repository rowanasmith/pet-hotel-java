import React from 'react';

import PetForm from '../PetForm/PetForm';
import PetTable from '../PetTable/PetTable'

function PetDashboard() {
  return (
    <div >
      <h1> Pet Dashboard </h1>

      <PetForm />
      
      <PetTable />
    </div>

  );
}

export default PetDashboard;
