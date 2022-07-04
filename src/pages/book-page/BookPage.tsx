import React, {useEffect} from 'react';
import {fetch} from "../../store/actions/bookItemActions";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {BookDispatch, IBook} from "../../types/Book";
import {RootState} from "../../store/store";
import './BookPage.scss';

interface Params {
    book: string | undefined
}

function BookPage() {
    const params = useParams()
    const dispatch: BookDispatch = useDispatch();
    const store = useSelector((state: RootState) => state.bookItemReducer)
    const {title, description, categories, authors, link}: IBook = store;

    useEffect(() => {
        //@ts-ignore
        dispatch(fetch(params.book))

    }, [])

    return (
        <div className="book-item__wrapper container">
            <div className="book-item__img">
                <img src={link && link} alt=""/>
            </div>
            <div className={'book-item__info'}>
                <span className="book-item__categories">
                    {categories && categories.join(' / ')}
                </span>
                <span className="book-item__title">{title}</span>
                <span className="book-item__authors">{authors && authors.join(', ')}</span>
                <span className="book-item__description">{description}</span>
            </div>
        </div>
    );
}

export default BookPage;