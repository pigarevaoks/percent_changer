import React from 'react'
import styles from './QuantityInput.css';
import classNames from 'classnames';

const QuantityInput = ({ layout, percent, index, onChange }) => (
    <div className={classNames([styles.container, layout])}>
        <input className={styles.input} type="number" min="0" max="100" step="1" value={percent} onChange={e => onChange(index, e.target.value)}/>
    </div>
);

export default QuantityInput;