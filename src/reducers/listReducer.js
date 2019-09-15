import CONSTANTS from '../actions'
let listId = 2
let cardId = 2
const initialState = [
    {
        title: 'First Episode',
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: `card-${1}`,
                text: 'lorem ipsum dolor sit amet'
            }
        ]
    },
    {
        title: 'second Episode',
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: `card-${3}`,
                text: 'lorem ipsum dolor sit amet'
            }
        ]
    },
    {
        title: 'third Episode',
        id: `list-${3}`,
        cards: [
            {
                id: `card-${4}`,
                text: 'lorem ipsum dolor sit amet'
            },
            {
                id: `card-${5}`,
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
                id: `list-${listId}`
            }
            listId += 1;
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardId}`
            }
            cardId += 1;
            console.log("action card", action)
            const newState = state.map(list => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list;
                }
            })
            return newState;
        case CONSTANTS.DRAG_HAPPENED: {
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId } = action.payload
            const newState = [...state]

            //in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIdStart, 1, list.cards.splice(droppableIndexEnd, 0, ...card))
                return newState
            }
        }

        default:
            return state;
    }
}

export default listReducer