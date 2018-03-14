import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h2>Hello, World</h2>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
