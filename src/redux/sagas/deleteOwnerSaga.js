import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteOwner(action){
    try {
        console.log( `DELETE owner with id from server.`, action );
        yield axios.delete( `/api/owner/${action.payload}` ); // update route when available
        yield put( {type: 'GET_OWNERLIST'} );
    }
    catch (error) {
        console.log( `Couldn't delete owner.`, error );
        alert( `Couldn't delete owner at this time. Try again later.`);
    }
}

function* deleteOwnerSaga(){
    yield takeLatest( 'DELETE_OWNER', deleteOwner );
}

export default deleteOwnerSaga;