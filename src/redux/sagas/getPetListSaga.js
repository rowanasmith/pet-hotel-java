import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPetList(action){
    try {
        console.log( `GET all pets from server.`, action );
        const response = yield axios.get( '/api/pet' ); // update route when available
        yield put( {type: 'SET_PETLIST', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get all pets!`, error );
        alert( `Couldn't add your pet at this time. Try again later.`);
    }
}

function* getPetListSaga(){
    yield takeLatest( 'GET_PETLIST', getPetList );
}

export default getPetListSaga;