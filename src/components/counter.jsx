import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState((state, props) => ({
            count: state.count + 1
          }));
    }
    
    render() {
        return (
            <div>
                <Button sign="-" />
                <Counter count={this.state.count} />
                <Button sign="+" handleChange={this.handleChange} />
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
        console.log(this.props.count);
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



// this.props.sign == "+" ? (count: state.count + 1) : (count: state.count - 1)