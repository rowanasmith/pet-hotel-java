import { all } from 'redux-saga/effects';
import addPetSaga from './addPetSaga';
import getPetListSaga from './getPetListSaga';
import addOwnerSaga from './addOwnerSaga';
import getOwnerListSaga from './getOwnerListSaga';
import deleteOwnerSaga from './deleteOwnerSaga';
import deletePetSaga from './deletePetSaga';
import updatePetSaga from './updatePetSaga';

export default function* rootSaga() {
  console.log( `HELp.` );
  
  yield all([
      // sagas will go here!
      addPetSaga(), // POST new pet to server
      getPetListSaga(), // GET all pets from server
      addOwnerSaga(), // POST new owner to server
      getOwnerListSaga(), // GET all owners from server
      deleteOwnerSaga(), // DELETE owner by id
      deletePetSaga(), // DELETE pet by id
      updatePetSaga(), // PUT to check-in/check-out pets
  ]);
}

