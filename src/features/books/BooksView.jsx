import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state)=>state.booksReducer.books);
    console.log(books);
    return (
        <div>
            <h1>Books View</h1>
        </div>
    );
};

export default BooksView;