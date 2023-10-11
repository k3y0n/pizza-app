import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.main}>
      <h1>
        <span>😔</span>
        <br />
        <span>Not found</span>
      </h1>
      <p className={styles.description}>Sorry we dont have that page</p>
    </div>
  );
};

export default NotFoundBlock;
