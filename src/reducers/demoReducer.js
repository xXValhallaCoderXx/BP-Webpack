const initialState = {
    counter: 0,
};

export default function demoReducer(state = initialState, action) {
    switch (action.type) {
    case 'INCREASE':
        return {
            counter: state.counter + 1,
        };
    }
    return state;
}