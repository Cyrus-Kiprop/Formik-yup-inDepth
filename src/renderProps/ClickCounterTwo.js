import React, { Component } from 'react'

class ClickCounterTwo extends Component {
  
    render() {

        // destructuring the state object
    const { count, incrementCount } = this.props;
        return (
            <button onClick={incrementCount}>clicked {count} number of Times</button>
        )
    }
}

export default ClickCounterTwo
