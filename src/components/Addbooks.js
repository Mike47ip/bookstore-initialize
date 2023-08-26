import React from 'react';
import styles from '../Styles/Addbooks.module.css';

function AddBook() {
  return (
    <div className={styles.container}>
      <h2 className={styles.head}>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className={styles.title}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          className={styles.author}
        />
        <button type="submit" className={styles.include}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBook;
