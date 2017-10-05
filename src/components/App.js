import React, { Component } from 'react';
import styles from '../assets/styles/main.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../actions';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someData: 'NONE',
        };
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
        console.log('THE PROPS', this.props);
        return (
            <div>
                <img src={require('../assets/images/bg.jpg')} style={{ height: 100 }} />
                <div className="counter-wrapper">
                    <h3>sfd</h3>
                    <h2>{this.props.testState.counter}</h2>
                    <button onClick={() => this.props.increaseReduxCounter()}>+</button>
                    <button onClick={() => this.lazyLoad()} className={styles.redButton}>LAZY LOAD</button>
                    <div>THE LAZY TEXT: {this.state.someData}</div>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({
        increaseReduxCounter: increaseCounter,
    }, dispatch)
}

function mapStateToProps(state){
    return {
        testState: state.demo,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);