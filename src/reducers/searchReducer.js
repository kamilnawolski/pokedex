import { SEARCH_VALUE, CLEAR_VALUE } from '../actions/search';

const initialState = {
    search: ''
}

const SearchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_VALUE:
            return {
                ...state, search: payload
            };
        case CLEAR_VALUE:
            return {
                ...state, search: ''
            }
        default: 
            return state;
    }
}

export default SearchReducer;