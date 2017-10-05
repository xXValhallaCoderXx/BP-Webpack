import React, { Component } from 'react';

class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }
    increaseCounter(){
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <img src={require('../assets/images/bg.jpg')} style={{height: 100}}/>
                <div className="counter-wrapper">
                    <h3>Countessr</h3>
                    <h2>{this.state.count}</h2>
                    <button onClick={() => this.increaseCounter()}>+</button>
                </div>
            </div>
        );
    }
}

export default Application;