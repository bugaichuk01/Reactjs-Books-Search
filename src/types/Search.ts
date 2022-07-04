import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export interface ISearch {
    q: string;
    subject: string;
    maxResults: number;
    startIndex: number;
    orderBy: string;
}

// action types
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY';
export const SET_SEARCH_SORT = 'SET_SEARCH_SORT';

// action interfaces
export interface ISetSearchText {
    type: typeof SET_SEARCH_TEXT;
    payload: string;
}

export interface ISetSearchCategory {
    type: typeof SET_SEARCH_CATEGORY;
    payload: string;
}

export interface ISetSearchSort {
    type: typeof SET_SEARCH_SORT;
    payload: string;
}

export type SearchActions = ISetSearchText | ISetSearchCategory | ISetSearchSort;
export type SearchDispatch = ThunkDispatch<ISearch, any, AnyAction>;