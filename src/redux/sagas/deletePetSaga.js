import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deletePet(action){
    try {
        console.log( `DELETE pet with id from server.`, action );
        yield axios.delete( `/api/pet/${action.payload}` ); // update route when available
        yield put( {type: 'GET_PETLIST'} );
    }
    catch (error) {
        console.log( `Couldn't delete pet.`, error );
        alert( `Couldn't delete pet at this time. Try again later.`);
    }
}

function* deletePetSaga(){
    yield takeLatest( 'DELETE_PET', deletePet );
}

export default deletePetSaga;