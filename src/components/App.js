import React, { Component } from 'react';
import styles from '../assets/styles/main.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            someData: 'NONE',
        };
    }
    increaseCounter() {
        this.setState({ count: this.state.count + 1 });
    }
    lazyLoad() {
        import('./lazy').then((lazy) => {
            this.setState({
                someData: lazy.default,
            });
        }).catch((err) => {
            console.error(err);
        });
    }
    render() {
        return (
            <div>
                <img src={require('../assets/images/bg.jpg')} style={{ height: 100 }} />
                <div className="counter-wrapper">
                    <h3>Countessr</h3>
                    <h2>{this.state.count}</h2>
                    <button onClick={() => this.increaseCounter()}>+</button>
                    <button onClick={() => this.lazyLoad()} className={styles.redButton}>LAZY LOAD</button>
                    <div>THE LAZY TEXT: {this.state.someData}</div>
                </div>
            </div>
        );
    }
}

export default Application;