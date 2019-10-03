import React, { Component } from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div>
            <Button sign="-"/>
            <Button sign="+"/>
        </div>
    );
}

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button>{this.props.sign}</button>
        );
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);

export default App;