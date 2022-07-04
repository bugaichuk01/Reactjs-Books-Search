import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './SearchInput.scss'
import {RootState} from "../../../store/store";
import {searchText} from "../../../store/actions/searchActions";
import {fetch, fetchBooksSuccess} from "../../../store/actions/booksActions";
import {BooksDispatch} from "../../../types/Books";
import {SearchDispatch} from "../../../types/Search";
import {useNavigate} from "react-router";
import {debounce} from 'lodash';

const SearchInput: React.FC = () => {
    const searchData = useSelector((state: RootState) => state?.searchReducer);

    const dispatchThunk: BooksDispatch = useDispatch();
    const dispatch: SearchDispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchText(e.target.value));
    }

    const debouncedChangeHandler = useCallback(
        debounce(onChange, 250), []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/')
        dispatchThunk(fetch(searchData, fetchBooksSuccess));
    }

    return (
        <form onSubmit={onSubmit} className={'search'}>
            <input onChange={debouncedChangeHandler} type="text" placeholder={''}/>
            <button className={'btn'} type={'submit'}>
                <i className="fa fa-search"/>
            </button>
        </form>
    );
}

export default SearchInput;