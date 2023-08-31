import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import styles from '../Styles/Addbooks.module.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const bookArr = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const id = bookArr.length + 1;
    dispatch(addBook({
      itemId: `item${id + 1}`,
      title,
      author,
    }));
    e.preventDefault();
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
        <button onClick={handleChange} type="submit" title="Add Book" className={styles.include}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
