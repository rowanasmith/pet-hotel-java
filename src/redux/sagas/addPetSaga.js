import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addPet(action){
    try {
        console.log( `POST new pet to server.`, action );
        yield axios.post( '/api/pet', action.payload ); // update route when available
        yield put( {type: 'GET_PETLIST'} );
    }
    catch (error) {
        console.log( `Couldn't add new pet!`, error );
        alert( `Couldn't add your pet at this time. Try again later.`);
    }
}

function* addPetSaga(){
    yield takeLatest( 'ADD_PET', addPet );
}

export default addPetSaga;