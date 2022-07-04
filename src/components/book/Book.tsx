import React from 'react';
import {IBooks} from "../../types/Books";
import './Book.scss';
import {Link} from "react-router-dom";

type BookType = {
    bookData: IBooks
}

const Book: React.FC<BookType> = ({bookData}) => {
    return (
        <Link to={`/${bookData?.id}`} className={'book__wrapper'}>
            <div className={'book-img__wrapper'}>
                <img className={'book-img'} src={bookData?.volumeInfo?.imageLinks?.thumbnail} alt=""/>
            </div>
            <span className={'book-categories'}>{bookData?.volumeInfo?.categories?.[0]}</span>
            <span className={'book-title'}>{bookData?.volumeInfo?.title}</span>
            <span className={'book-authors'}>{bookData?.volumeInfo?.authors?.join(', ')}</span>
        </Link>
    );
}

export default Book;