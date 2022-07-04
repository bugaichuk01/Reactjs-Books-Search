import {
    BooksActions,
    FETCH_BOOKS,
    FETCH_BOOKS_ERROR,
    FETCH_BOOKS_SUCCESS,
    IBooks, IBooksResponse,
    IFetchBooksAction,
    IFetchBooksActionSuccess,
    IFetchBooksErrorAction,
    ILoadMoreBooks,
    LOAD_MORE_BOOKS
} from "../../types/Books";
import axios from "axios";
import {Dispatch} from "react";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";
import {ISearch} from "../../types/Search";


const _URI = 'https://www.googleapis.com/books/v1/volumes';
const _API = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchBooks = (): IFetchBooksAction => ({
    type: FETCH_BOOKS
});

export const fetchBooksSuccess = (payload: IBooksResponse): IFetchBooksActionSuccess => ({
    type: FETCH_BOOKS_SUCCESS,
    payload
});

export const fetchBooksError = (payload: Error): IFetchBooksErrorAction => ({
    type: FETCH_BOOKS_ERROR,
    payload
});

export const loadMoreBooks = (payload: IBooksResponse): ILoadMoreBooks => ({
    type: LOAD_MORE_BOOKS,
    payload
});


export const fetch =
    (searchData: ISearch, action: any): ThunkAction<void, IBooks[], unknown, AnyAction> =>
        async (dispatch: Dispatch<BooksActions>) => {

            const {q, subject, maxResults, startIndex, orderBy} = searchData;
            const myString: string = subject === 'all' ? q : `${q}+subject:${subject}`
            myString !== '' && dispatch(fetchBooks());

            myString !== '' && await axios.get(`${_URI}?q=${myString}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&key=${_API}`)
                .then((data) => dispatch(action(data.data)))
                .catch((error) => dispatch(fetchBooksError(error)));
        }
