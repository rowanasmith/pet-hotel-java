import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

console.log( `Hey.` );


function* getPetList(){
    console.log( `Yo.` );
    try {
        console.log( `GET all pets from server.` );
        const response = yield axios.get( '/api/pet' ); // update route when available
        yield put( {type: 'SET_PETLIST', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get all pets!`, error );
        alert( `Couldn't get pets at this time. Try again later.`);
    }
}

function* getPetListSaga(){
    console.log( `Woot.` );
    yield takeEvery( 'GET_PETLIST', getPetList );
}

export default getPetListSaga;