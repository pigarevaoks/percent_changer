import React from 'react';
import styles from './RangeSlider.css';
import classNames from 'classnames';

const RangeSlider = ({ layout, name, percent, index, onChange }) => (
    <div className={classNames([styles.container, layout])}>
        <span className={styles.title}>{name}</span>
        <input className={styles.slider} 
            type="range" 
            min="0" 
            max="100" 
            step="0.01" 
            value={percent} 
            onChange={e => onChange(index, e.target.value)} 
        />
        <input className={styles.input}
            type="number"
            min="0"
            max="100"
            step="1"
            value={percent}
            onChange={e => onChange(index, e.target.value)} 
        />
    </div>
);

export default RangeSlider;