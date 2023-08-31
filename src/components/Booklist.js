import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const booksArr = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <>
      {booksArr.map((book) => (
        <Books
          key={book.itemId + book.title}
          id={book.itemId}
          category={book.category}
          title={book.title}
          author={book.author}
          progress={book.progress}
          status={book.status}
          chapter={book.chapter}
          onClick={handleChange}
        />
      ))}
    </>
  );
}

export default BookList;
