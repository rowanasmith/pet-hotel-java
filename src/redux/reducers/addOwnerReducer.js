const owners = [
    {
        name: 'Bob'
    },
    {
        name: 'Jim'
    },
]

const addOwner = (state = [], action) => {
    switch(action.type) {
        // case 'ADD_OWNER':
        //     return [...state, action.payload];
        case 'SET_OWNERLIST':
            return action.payload;
        default:
            return state;
    }
}

export default addOwner;