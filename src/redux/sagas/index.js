import { all } from 'redux-saga/effects';
import addPetSaga from './addPetSaga';
import getPetListSaga from './getPetListSaga';
import addOwnerSaga from './addOwnerSaga';
import getOwnerListSaga from './getOwnerListSaga';

export default function* rootSaga() {
  yield all([
      // sagas will go here!
      addPetSaga, // POST new pet to server
      getPetListSaga, // GET all pets from server
      addOwnerSaga, // POST new owner to server
      getOwnerListSaga, // GET all owners from server
  ]);
}

