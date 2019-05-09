
const pets = [
    {
        name: 'Fox',
        color: 'Brown',
        breed: 'Lab',
        owner: 'Jay',
    }
]


const addPet = (state = pets, action) => {
    switch(action.type) {
        // case 'ADD_PET':
        //     return [...pets, action.payload];
        case 'SET_PETLIST':
            return action.payload;
        default:
            return state;
    }
}

export default addPet;