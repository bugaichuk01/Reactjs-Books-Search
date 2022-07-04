import React from 'react'
import SelectGroup from "./search-group";
import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <p className={'search__title'}>Search for books</p>
            <SelectGroup />
        </header>
    )
}

export default Header