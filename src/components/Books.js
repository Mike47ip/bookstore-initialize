import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import styles from '../Styles/Books.module.css';
import Button from './Buttons';

function Books({
  category, title, id, author, progress, status, chapter, onClick,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.genre}>{category || 'Uncategorized'}</p>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.author}>{author || 'Unknown'}</p>
        <div className={styles.actions}>
          <button type="button" className={styles.comment}>Comments</button>
          <span>|</span>
          <Button type="button" className={styles.remove} id={id} onClick={onClick} title="Remove" />
          <span>|</span>
          <button type="button" className={styles.edit}>Edit</button>
        </div>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressbar}><CircularProgressbar value={progress} /></div>
        <div className={styles.progressdata}>
          <div className={styles.progresspercentage}>
            {progress}
            %
          </div>
          <div className={styles.progressstatus}>{status}</div>
        </div>
      </div>
      <div className={styles.current}>
        <p className={styles.currentchapter}>CURRENT CHAPTER</p>
        <p className={styles.chapter}>{chapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Books.defaultProps = {
  category: '',
  id: '',
  title: '',
  author: '',
  progress: '',
  status: '',
  chapter: '',
  onClick: '',
};

Books.propTypes = {
  category: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
  status: PropTypes.string,
  chapter: PropTypes.string,
  onClick: PropTypes.func,
};

export default Books;
