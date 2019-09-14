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
const listReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listReducer