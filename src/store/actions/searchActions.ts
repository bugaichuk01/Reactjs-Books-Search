import {
    SearchActions,
    SET_SEARCH_CATEGORY,
    SET_SEARCH_SORT,
    SET_SEARCH_TEXT
} from "../../types/Search";

export const searchText = (text: string): SearchActions => {
    console.log('change')
    return {type: SET_SEARCH_TEXT, payload: text}
}

export const searchCategory = (text: string): SearchActions => {
    return {type: SET_SEARCH_CATEGORY, payload: text}
}

export const searchSort = (text: string): SearchActions => {
    return {type: SET_SEARCH_SORT, payload: text}
}
