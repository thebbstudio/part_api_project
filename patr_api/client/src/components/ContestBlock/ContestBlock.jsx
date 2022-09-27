/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import BASE_URL from '../../http/config';
import styles from './ContestBlock.module.css';

function ContestBlock({
  id, url, title, description, count, vote,
}) {
  return (
    <div className={styles.block}>
      <div>
        <video controls className={styles.video}>
          <source src={`${BASE_URL}/media/${url}`} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        </video>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div>
        <button className={styles.btn} disabled={count !== undefined} type="button" onClick={() => vote(id)}>
          {count !== undefined ? `Голосов: ${count}` : 'Проголосовать'}
        </button>
      </div>
    </div>
  );
}

export default ContestBlock;
