import React, {ChangeEvent, useCallback} from 'react';
import './SearchInput.scss'
import {useNavigate} from "react-router";
import {debounce} from 'lodash';
import {useTypedSelector} from "../../../_hooks/useTypedSelector";
import {useActions} from "../../../_hooks/useActions";

const SearchInput: React.FC = () => {
    const searchData = useTypedSelector(state => state?.searchReducer);

    const {fetch, searchText, fetchBooksSuccess} = useActions()
    const navigate = useNavigate();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        searchText(e.target.value);
    }

    const debouncedChangeHandler = useCallback(
        debounce(onChange, 250), []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/')
        fetch(searchData, fetchBooksSuccess);
    }

    return (
        <form onSubmit={onSubmit} className={'search'}>
            <input onChange={debouncedChangeHandler} type="text" placeholder={'Type here...'}/>
            <button className={'btn'} type={'submit'}>
                <i className="fa fa-search"/>
            </button>
        </form>
    );
}

export default SearchInput;