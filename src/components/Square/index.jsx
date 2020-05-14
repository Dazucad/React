import React, {Component} from 'react';

import styles from './index.css';

export class Square extends Component {
    render() {
        return (
            <button
                className={styles.Square}
                onClick={this.props.onClick}
            >
                {this.props.value}
            </button>
        );
    }
}
