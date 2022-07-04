import {BookActions, FETCH_BOOK, FETCH_BOOK_ERROR, FETCH_BOOK_SUCCESS, IBook} from "../../types/Book";

const initialState: IBook= {
    title: '',
    description: '',
    authors: [],
    categories: [],
    link: '',
    loading: false,
    error: null
}

export const bookItemReducer = (state = initialState, action: BookActions) => {
    switch (action.type) {
        case FETCH_BOOK:
            return {...state, loading: true, error: null}
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                title: action?.payload?.items[0].volumeInfo?.title,
                description: action?.payload?.items[0].volumeInfo?.description,
                authors: action?.payload?.items[0].volumeInfo.authors,
                link: action?.payload?.items[0].volumeInfo?.imageLinks?.thumbnail,
                categories: action?.payload?.items[0].volumeInfo?.categories,
                loading: false,
                error: null
            }
        case FETCH_BOOK_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}