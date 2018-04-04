import React from 'react'
import styles from './Button.css';

const Button = ({ color, onClick, title }) => (
    <button type="button" className={styles.button} style={{ backgroundColor: color }} onClick={onClick}>
        <span className={styles.title}>{title}</span>
    </button>
);

export default Button;