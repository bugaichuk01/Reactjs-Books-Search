import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {IBook} from "../../types/Book";
import './BookPage.scss';
import loader from "../../images/loader.gif";
import {useActions} from "../../_hooks/useActions";
import {useTypedSelector} from "../../_hooks/useTypedSelector";


function BookPage() {
    const params = useParams()
    const {fetchBook} = useActions();
    const store = useTypedSelector(state => state.bookItemReducer)
    const {title, description, categories, authors, link, error, loading}: IBook = store;

    useEffect(() => {
        fetchBook(params.book)
    }, [])

    return (
        <React.Fragment>
            {
                loading && (
                    <div className={'loader'}>
                        <img src={loader} alt=""/>
                    </div>
                )
            }
            <div className="book-item__wrapper container">
                {
                    error
                        ? (
                            <p>Error, try again later</p>
                        )
                        : (
                            <React.Fragment>
                                <div className="book-item__img">
                                    {link && <img src={link} alt=""/>}
                                </div>
                                <div className={'book-item__info'}>
                                    {categories && <span className="book-item__categories">{categories.join(' / ')}</span>}
                                    {title && <span className="book-item__title">{title}</span>}
                                    {authors && <span className="book-item__authors">{authors.join(', ')}</span>}
                                    {description && <span className="book-item__description">{description}</span>}
                                </div>
                            </React.Fragment>
                        )
                }
            </div>
        </React.Fragment>
    );
}

export default BookPage;