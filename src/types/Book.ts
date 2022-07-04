import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {IBooks} from "./Books";

export interface IBook {
    title: string;
    description: string;
    authors?: string[];
    categories?: string[];
    link?: string;
    loading: boolean;
    error: Error | null;
}

export interface IBookResponse extends IBooks {
    items: {
        0: {
            volumeInfo: {
                title: string;
                description: string;
                authors?: string[];
                categories?: string[];
                imageLinks: {
                    thumbnail?: string;
                };
            };
        };
    }
}

// action types
export const FETCH_BOOK = 'FETCH_BOOK';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';

// action interfaces
export interface IFetchBookAction {
    type: typeof FETCH_BOOK;
}

export interface IFetchBookActionSuccess {
    type: typeof FETCH_BOOK_SUCCESS;
    payload: IBookResponse;
}


export interface IFetchBookErrorAction {
    type: typeof FETCH_BOOK_ERROR;
    payload: Error;
}

export type BookActions = IFetchBookAction | IFetchBookActionSuccess | IFetchBookErrorAction;
export type BookDispatch = ThunkDispatch<IBook, any, AnyAction>;