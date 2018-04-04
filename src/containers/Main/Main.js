import React from 'react';
import { Button, QuantityInput, RangeSlider, ResultList } from 'components';
import styles from './Main.css';

class Main extends React.Component {

    state = {
        items: [
            { name: "Item 1", percent: 0 }
        ] 
    }

    _onAddRangeSlider = () => {
        let newItems = this.state.items.slice();
        newItems.push({ name: `Item ${newItems.length + 1}`, percent: 0 });
        this.setState({ items: newItems });
    }

    _onDeleteRangeSlider = () => {
        let newItems = this.state.items.slice();
        newItems.pop();
        this.setState({ items: newItems });
    }

    _onChange = (key, value) => {
        const newItems = this.state.items.slice();
        newItems[key].percent = value;
        this.setState({ items: newItems })
    }

    render() {
        const { items } = this.state;

        return (
            <div className={styles.grid}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Button title='ADD' color='#0d9a59' onClick={this._onAddRangeSlider} />
                        <Button title='DELETE' color='#DD3E3E' onClick={this._onDeleteRangeSlider} />
                    </div>
                    {items.map((item, index) => {
                        return (
                            <div className={styles.row} key={index}>
                                <RangeSlider layout={styles.slider} {...item} index={index} onChange={this._onChange} />
                                <QuantityInput layout={styles.input} percent={item.percent} index={index} onChange={this._onChange} />
                            </div>
                        )}
                    )}
                    <ResultList items={items} />
                </div>
            </div>
        );
    }
}

export default Main;