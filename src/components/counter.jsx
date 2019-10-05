import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleDecrement(e) {
        this.setState((state, props) => ({
            count: state.count - 1
        }));
    }

    handleIncrement(e) {
        this.setState((state, props) => ({
            count: state.count + 1
          }));
    }
    
    render() {
        return (
            <div>
                <Button sign="-" handleChange={this.handleDecrement} />
                <Counter count={this.state.count} />
                <Button sign="+" handleChange={this.handleIncrement} />
            </div>
        );
    }
}

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button onClick={this.props.handleChange}>{this.props.sign}</button>
        );
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.count}</div>
        );
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

export default App;



