import CONSTANTS from '../actions'
let listId = 2
let cardId = 2
const initialState = [
    {
        title: 'First Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: 1,
                text: 'lorem ipsum dolor sit amet'
            }
        ]
    },
    {
        title: 'second Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: 1,
                text: 'lorem ipsum dolor sit amet'
            }
        ]
    },
    {
        title: 'third Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: 1,
                text: 'lorem ipsum dolor sit amet'
            }
        ]
    },
]
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId
            }
            listId += 1
            return [...state, newList]

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload,
                id: cardId
            }
            cardId += 1
        default:
            return state;
    }
}

export default listReducer