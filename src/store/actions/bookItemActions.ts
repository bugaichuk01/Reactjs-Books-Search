import axios from "axios";
import { Dispatch } from "react";
import {
    BookActions,
    FETCH_BOOK, FETCH_BOOK_ERROR, FETCH_BOOK_SUCCESS, IBook, IBookResponse,
    IFetchBookAction,
    IFetchBookActionSuccess,
    IFetchBookErrorAction
} from "../../types/Book";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

const _URI = 'https://www.googleapis.com/books/v1/volumes';
const _API = process.env.REACT_APP_GOOGLE_API_KEY;

export const fetchBook = (): IFetchBookAction => ({
    type: FETCH_BOOK
});

export const fetchBookSuccess = (payload: IBookResponse): IFetchBookActionSuccess => ({
    type: FETCH_BOOK_SUCCESS,
    payload
});

export const fetchBookError = (payload: Error): IFetchBookErrorAction => ({
    type: FETCH_BOOK_ERROR,
    payload
});

export const fetch =
    (id: string): ThunkAction<void, IBook, unknown, AnyAction> =>
        async (dispatch: Dispatch<BookActions>) => {

            try {
                dispatch(fetchBook())
                const response = await axios.get<IBookResponse>(`${_URI}/?q=${id}&key=${_API}`)
                dispatch(fetchBookSuccess(response.data))

            } catch (error: any) {
                dispatch(fetchBookError(error))
            }
        }
