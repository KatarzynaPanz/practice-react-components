import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        amount: 0,
    }

    clickHandler = e => {
        e.preventDefault;
        const {amount} = this.state;
        this.setState({
            amount: amount + 1,
        })
    }

    render() {
        return <button onClick={this.clickHandler}>click me ({ this.state.amount })</button>
    }
}

ReactDOM.render(<Counter />, document.querySelector('#root'));