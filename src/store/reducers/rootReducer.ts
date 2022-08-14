import {combineReducers} from "redux"
import {booksReducer} from "./booksReducer"
import {searchReducer} from "./searchReducer"
import {bookItemReducer} from "./bookItemReducer";

export const rootReducer = combineReducers({
    booksReducer: booksReducer,
    searchReducer: searchReducer,
    bookItemReducer: bookItemReducer
})

export type RootState = ReturnType<typeof rootReducer>