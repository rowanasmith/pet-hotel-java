import { all } from 'redux-saga/effects';
import addPetSaga from './addPetSaga';
import getPetListSaga from './getPetListSaga';

export default function* rootSaga() {
  yield all([
      // sagas will go here!
      addPetSaga, // POST new pet to server
      getPetListSaga, // GET all pets from server
  ]);
}

