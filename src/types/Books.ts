import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export interface IBooks {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        categories?: string[];
        imageLinks: {
            thumbnail?: string;
        };
    };
}

export interface IBooksResponse {
    items: IBooks[];
    totalItems: number;
}

export interface IBooksState {
    books: IBooks[];
    loading: boolean;
    error: null | Error;
    totalItems: null
}

// action types
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const LOAD_MORE_BOOKS = 'LOAD_MORE_BOOKS';

// action interfaces
export interface IFetchBooksAction {
    type: typeof FETCH_BOOKS;
}

export interface IFetchBooksActionSuccess {
    type: typeof FETCH_BOOKS_SUCCESS;
    payload: IBooksResponse;
}

export interface ILoadMoreBooks {
    type: typeof LOAD_MORE_BOOKS;
    payload: IBooksResponse;
}

export interface IFetchBooksErrorAction {
    type: typeof FETCH_BOOKS_ERROR;
    payload: Error;
}

export type BooksActions = IFetchBooksAction | IFetchBooksActionSuccess | IFetchBooksErrorAction | ILoadMoreBooks;
export type BooksDispatch = ThunkDispatch<IBooks[], any, AnyAction>;