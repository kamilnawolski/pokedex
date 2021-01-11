export const SEARCH_VALUE = 'SEARCH_VALUE';
export const CLEAR_VALUE = 'CLEAR_VALUE';

export const setSearchValue = data => ({ type: SEARCH_VALUE, payload: data });
export const setClearValue = data => ({ type: CLEAR_VALUE, payload: data });