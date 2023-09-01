import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import Button from './Buttons';
import styles from '../Styles/Addbooks.module.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const category = ['Fiction', 'Action', 'Comedy', 'Adventure', 'Crime', 'Classics', 'Fairy Tale', 'Horror', 'Fantasy', 'Business'];
  const randomNumber = Math.floor(Math.random() * 10);

  const handleChange = (e) => {
    e.preventDefault();

    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: category[randomNumber],
    };

    dispatch(postBook(book));
    setAuthor('');
    setAuthor('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.head}>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className={styles.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          className={styles.author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button className={styles.include} onClick={handleChange} title="ADD BOOK" />
      </form>
    </div>
  );
}

export default AddBook;
