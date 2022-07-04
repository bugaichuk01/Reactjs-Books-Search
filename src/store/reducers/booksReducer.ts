import {BooksActions, FETCH_BOOKS, FETCH_BOOKS_ERROR, FETCH_BOOKS_SUCCESS, LOAD_MORE_BOOKS, IBooksState} from "../../types/Books";


const initialState: IBooksState = {
    books: [],
    loading: false,
    error: null,
    totalItems: null
}

export const booksReducer = (state = initialState, action: BooksActions) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {...state, loading: true, error: null};
        case FETCH_BOOKS_SUCCESS:
            return { ...state, loading: false, error: null, books: action.payload.items, totalItems: action.payload.totalItems }
        case FETCH_BOOKS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case LOAD_MORE_BOOKS:
            return { ...state, loading: false, error: null, books: [...state.books, ...action.payload.items] };
        default:
            return state
    }
}