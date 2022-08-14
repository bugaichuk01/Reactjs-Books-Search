import React, {useEffect} from 'react';
import './Select.scss';
import {ISelect} from "../../../../types/Select";
import {useNavigate} from "react-router";
import {useActions} from "../../../../_hooks/useActions";
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";

const Select: React.FC<ISelect> = ({label, options, onSelectChange}) => {
    const searchData = useTypedSelector(state => state?.searchReducer)
    const {fetch, fetchBooksSuccess} = useActions();
    const navigate = useNavigate();

    useEffect(() => {
        fetch({...searchData}, fetchBooksSuccess)
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