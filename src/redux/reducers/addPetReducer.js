
const addPet = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PET':
            return action.payload;
        default:
            return state;
    }
}

export default addPet;