import React from 'react';
import {IBooks, IBooksState} from '../../types/Books'
import Book from "../../components/book";
import './HomePage.scss';
import loader from '../../images/loader.gif';
import {useTypedSelector} from "../../_hooks/useTypedSelector";
import {useActions} from "../../_hooks/useActions";

const HomePage: React.FC = () => {
    const {books, loading, error, totalItems}: IBooksState = useTypedSelector(state => state?.booksReducer)
    const searchData = useTypedSelector(state  => state?.searchReducer)

    const {fetch, loadMoreBooks} = useActions();

    const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        fetch({...searchData, startIndex: searchData.startIndex + 30}, loadMoreBooks)
    }


    return (
        <div className={'container'}>

            {totalItems && (
                <div className={'results-wrapper'}>
                    <span className={'results'}>Found {totalItems} results</span>
                </div>

            )}

            <ul className={'books-list'}>
                {
                    books && books?.map((book: IBooks, index: number) => (
                        <li className={'books-list__item'} key={index}>
                            <Book bookData={book}/>
                        </li>
                    ))
                }
            </ul>

            {
                loading &&
                (
                    <div className={'loader'}>
                        <img src={loader} alt=""/>
                    </div>
                )
            }

            {
                error &&
                (
                    <p>Error, try again later</p>
                )
            }

            {
                books.length > 0 && (
                    <div className="btn-wrapper">
                        <button className={'btn btn-primary'} onClick={onClick}>Load more</button>
                    </div>
                )
            }

        </div>
    );
}

export default HomePage;