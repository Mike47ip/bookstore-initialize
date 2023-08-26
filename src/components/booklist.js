import React from 'react';
import Books from './Books';

const booksArr = [
  {
    genre: 'Action',
    title: 'The Hunger games',
    author: 'Sizanne collins',
    progress: '64',
    status: 'Completed',
    chapter: 'Chapter 17',
  }, {
    genre: 'Fiction',
    title: 'My Life is Magic',
    author: 'Kubaho Linne H.',
    progress: '8',
    status: 'Completed',
    chapter: 'Chapter 3: "A Lesson Learned"',
  }, {
    genre: 'Romance',
    title: 'How I met my heart',
    author: 'Linne Heaven K.',
    progress: '0',
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
