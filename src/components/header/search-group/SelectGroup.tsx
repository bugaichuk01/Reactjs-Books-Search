import React from 'react';
import SearchInput from "../search-input";
import './SelectGroup.scss';
import Select from "./select";
import {useDispatch} from "react-redux";
import {searchCategory, searchSort} from "../../../store/actions/searchActions";
import {AnyAction} from "redux";

const SelectGroup: React.FC = () => {
    const dispatch = useDispatch();

    const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"]
        .map(category => {
            return {value: category}
        })

    const orderBy = ["relevance", "newest"]
        .map(category => {
            return {value: category}
        })

    const onChange = (value: string, option: ((value: string) => AnyAction)) => {
        dispatch(option(value));
    }

    return (
        <React.Fragment>
            <SearchInput/>
            <div className="select__group">
                <Select onSelectChange={text => onChange(text, searchCategory)} label={'Categories'} options={categories}/>
                <Select onSelectChange={text => onChange(text, searchSort)} label={'Sorting by'} options={orderBy}/>
            </div>
        </React.Fragment>
    );
}

export default SelectGroup;