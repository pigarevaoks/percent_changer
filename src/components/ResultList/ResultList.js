import React from 'react';
import styles from './ResultList.css';

const ResultList = ({ items }) => (
    <div className={styles.container}>
        <h3>Результат:</h3>
        <ul className={styles.list}>
            {items.map((item, index) => <li key={index} className={styles.item}>{item.name}: {item.percent}%</li>)}
        </ul>
    </div>
);

export default ResultList;