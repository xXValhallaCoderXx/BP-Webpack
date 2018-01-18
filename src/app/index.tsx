import React, { Component } from 'react'
import { hot } from "react-hot-loader";

interface HelloWorldProps {
    name: string;
}

interface HelloWorldState {
    componentState: number;
}

class Application  extends Component<HelloWorldProps, HelloWorldState> {
    constructor(props: HelloWorldProps) {
        super(props);
        this.state = {
            componentState: 100,
        };
    }
    render() {
        return (
            <div>
                <h1>Basic Asddddss</h1>
                <h3>Hello  {this.props.name}</h3>
                <hr/>
                {this.state.componentState}
                <button onClick={() => this.setState({ componentState: this.state.componentState + 1 })}>Click</button>
            </div>
        );
    }
};

export default hot(module)(Application);