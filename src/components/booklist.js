import React from 'react';
import Books from './Books';

const booksArr = [
  {
    genre: 'Action',
    title: 'For the love of the game',
    author: 'Sizanne collins',
    progress: '21',
    status: 'Completed',
    chapter: 'Chapter 17',
  }, {
    genre: 'Fiction',
    title: 'God of War',
    author: 'Kubaho Linne H.',
    progress: '45',
    status: 'Completed',
    chapter: 'Chapter 3: "A Lesson Learned"',
  }, {
    genre: 'Romance',
    title: 'Snow fall',
    author: 'Linne Heaven K.',
    progress: '6',
    status: 'Completed',
    chapter: 'Introduction',
  },
];

function BookList() {
  return (
    <>
      {booksArr.map((book) => (
        <Books
          key={book.title + book.genre}
          genre={book.genre}
          title={book.title}
          author={book.author}
          progress={book.progress}
          status={book.status}
          chapter={book.chapter}
        />
      ))}
    </>
  );
}

export default BookList;
