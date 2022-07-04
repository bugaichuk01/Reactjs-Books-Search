import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BooksDispatch, IBooks, IBooksState} from '../../types/Books'
import {RootState} from "../../store/store";
import {fetch, loadMoreBooks} from "../../store/actions/booksActions";
import {ISearch} from "../../types/Search";
import Book from "../../components/book";
import './HomePage.scss';
import loader from '../../images/loader.gif';

const HomePage: React.FC = () => {
    const {books, loading, error, totalItems}: IBooksState = useSelector((state: RootState) => state?.booksReducer)
    const searchData: ISearch = useSelector((state: RootState) => state?.searchReducer)

    const dispatch: BooksDispatch = useDispatch();

    const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(fetch({...searchData, startIndex: searchData.startIndex + 30}, loadMoreBooks))
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