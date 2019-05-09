import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOwner(action){
    try {
        console.log( `POST new owner to server.`, action );
        yield axios.post( '/api/owner', action.payload ); // update route when available
        yield put( {type: 'GET_OWNERLIST'} );
    }
    catch (error) {
        console.log( `Couldn't add new owner!`, error );
        alert( `Couldn't add owner at this time. Try again later.`);
    }
}

function* addOwnerSaga(){
    yield takeLatest( 'ADD_OWNER', addOwner );
}

export default addOwnerSaga;