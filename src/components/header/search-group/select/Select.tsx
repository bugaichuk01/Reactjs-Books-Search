import React, {useEffect} from 'react';
import './Select.scss';
import {ISelect} from "../../../../types/Select";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {fetch, fetchBooksSuccess} from "../../../../store/actions/booksActions";
import {BooksDispatch} from "../../../../types/Books";
import {useNavigate} from "react-router";

const Select: React.FC<ISelect> = ({label, options, onSelectChange}) => {
    const searchData = useSelector((state: RootState) => state?.searchReducer)
    const dispatch: BooksDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetch({...searchData}, fetchBooksSuccess))
    }, [searchData?.subject, searchData?.orderBy])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        navigate('/')
        onSelectChange(e.target.value);
    }

    return (
        <div className="select">
            <label>{label}</label>
            <select className={'select-item'} onChange={onChange}>
                {options.map((value, index) =>
                    <option key={index} value={value.value}>{value.value}</option>
                )}
            </select>
        </div>
    );
}

export default Select;