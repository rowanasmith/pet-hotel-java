import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getOwnerList(action){
    try {
        console.log( `GET all owners from server.`, action );
        const response = yield axios.get( '/api/owner' ); // update route when available
        yield put( {type: 'SET_OWNERLIST', payload: response.data} );
    }
    catch (error) {
        console.log( `Couldn't get all owners!`, error );
        alert( `Couldn't get owners at this time. Try again later.`);
    }
}

function* getOwnerListSaga(){
    yield takeLatest( 'GET_OWNERLIST', getOwnerList );
}

export default getOwnerListSaga;