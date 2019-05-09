import React from 'react';

import AddOwner from '../AddOwner/addOwner';
import OwnerList from '../OwnerList/ownerList';

function OwnerDashboard() {
  return (
    <div >
      <h1> Owner Dashboard </h1>

      <AddOwner />
      
      <OwnerList />
    </div>

  );
}

export default OwnerDashboard;
