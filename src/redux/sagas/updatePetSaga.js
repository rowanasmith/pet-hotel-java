import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updatePet(action){
    try {
        console.log( `UPDATE pet with id in server.`, action );
        yield axios.put( `/api/pet/${action.payload}` ); 
        // ^ update route when available, update data if needed
        yield put( {type: 'GET_PETLIST'} );
    }
    catch (error) {
        console.log( `Couldn't update pet.`, error );
        alert( `Couldn't update pet at this time. Try again later.`);
    }
}

function* updatePetSaga(){
    yield takeLatest( 'UPDATE_PET', updatePet );
}

export default updatePetSaga;