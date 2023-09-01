/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Books from './Books';
import { getBooks, deleteBookFromApi } from '../redux/books/booksSlice';

function BookList() {
  const booksArr = useSelector((state) => state.book.books);
  const booksStatus = useSelector((state) => state.book.status);
  const booksError = useSelector((state) => state.book.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const transformedData = Object.entries(booksArr).map(([item_id, items]) => {
    const [item] = items;
    return { item_id, ...item };
  });

  const handleChange = (e) => {
    dispatch(deleteBookFromApi(e.target.id));
  };

  if (booksStatus === 'loading') {
    return (
      <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    );
  }

  if (booksError !== null) {
    return (
      <h1 style={{ textAlign: 'center' }}>{booksError}</h1>
    );
  }

  return (
    <>
      {transformedData.map((book) => (
        <Books
          key={uuidv4()}
          id={book.item_id}
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
