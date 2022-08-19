import {ISearch, SearchActions, SET_SEARCH_CATEGORY, SET_SEARCH_SORT, SET_SEARCH_TEXT} from "../../types/Search";

const initialState: ISearch = {
    q: '',
    subject: 'all',
    maxResults: 8,
    startIndex: 0,
    orderBy: 'Relevance'
}

export const searchReducer = (state = initialState, action: SearchActions) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {...state, q: action.payload}
        case SET_SEARCH_CATEGORY:
            return {...state, subject: action.payload}
        case SET_SEARCH_SORT:
            return {...state, orderBy: action.payload}
        default:
            return state
    }
}