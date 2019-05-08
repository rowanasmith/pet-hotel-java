import { combineReducers } from 'redux';
import addPet from '../reducers/addPetReducer';
import addOwner from '../reducers/addOwnerReducer';

const rootReducer = combineReducers({
    addPet,
    addOwner,
});

export default rootReducer;
